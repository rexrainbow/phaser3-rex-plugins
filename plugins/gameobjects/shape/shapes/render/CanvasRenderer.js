const SetTransform = Phaser.Renderer.Canvas.SetTransform;

var CanvasRenderer = function (renderer, src, camera, parentMatrix) {
    if (src.dirty) {
        src.updateData();
        src.dirty = false;
    }

    camera.addToRenderList(src);

    var ctx = renderer.currentContext;

    if (SetTransform(renderer, ctx, src, camera, parentMatrix)) {
        var dx = src._displayOriginX;
        var dy = src._displayOriginY;

        var shapes = src.geom;
        for (var i = 0, cnt = shapes.length; i < cnt; i++) {
            shapes[i].canvasRender(ctx, dx, dy);
        }
    }
};

export default CanvasRenderer;
