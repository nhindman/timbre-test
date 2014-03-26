define(function(require, exports, module) {
    var Surface         = require('famous/core/Surface');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var View            = require('famous/core/View');

    var StripView       = require('./StripView');

    function MenuView() {
        View.apply(this, arguments);

        _createStripViews.call(this);
    }

    MenuView.prototype = Object.create(View.prototype);
    MenuView.prototype.constructor = MenuView;

    MenuView.DEFAULT_OPTIONS = {};

    function _createStripViews() {
        var stripView = new StripView();
        var stripModifier = new Modifier({
            transform: Transform.translate(0, 200, 0)
        });

        this._add(stripModifier).add(stripView);
    }

    module.exports = MenuView;
});
