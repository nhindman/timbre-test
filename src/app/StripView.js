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

    StripView.DEFAULT_OPTIONS = {};

    function _createBacking() {
        var backSurface = new Surface({
            size: [300, 50],
            properties: {
                backgroundColor: 'black'
            }
        });

        this._add(backSurface);
    }

    module.exports = StripView;
});
