define(function(require, exports, module) {
    var Surface         = require('famous/core/Surface');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var View            = require('famous/core/View');

    function StripView() {
        View.apply(this, arguments);

        _createBacking.call(this);
    }

    StripView.prototype = Object.create(View.prototype);
    StripView.prototype.constructor = StripView;

    StripView.DEFAULT_OPTIONS = {
        angle: 0,
        width: 0,
        height: 0
    };

    function _createBacking() {
        var angle = -Math.PI/6;

        var backSurface = new Surface({
            size: [300, 50],
            properties: {
                backgroundColor: 'black'
            }
        });

        var rotateModifier = new Modifier({
            transform: Transform.rotateZ(angle)
        });

        var skewModifier = new Modifier({
            transform: Transform.skew(0, 0, angle)
        });

        this._add(rotateModifier).add(skewModifier).add(backSurface);
    }

    module.exports = StripView;
});
