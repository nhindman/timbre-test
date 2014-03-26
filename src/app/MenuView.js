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

    MenuView.DEFAULT_OPTIONS = {
        angle: -0.2,
        stripWidth: 320,
        stripHeight: 54,
        topOffset: 37,
        stripOffset: 58
    };

    function _createStripViews() {
        this.stripModifiers = [];

        var stripData = [
            {title: 'search', iconUrl: '../img/strip-icons/search.png'},
            {title: 'starred', iconUrl: '../img/strip-icons/starred.png'},
            {title: 'friends', iconUrl: '../img/strip-icons/friends.png'},
            {title: 'settings', iconUrl: '../img/strip-icons/settings.png'}
        ];

        for(var i = 0; i < stripData.length; i++) {
            var stripView = new StripView({
                angle: this.options.angle,
                width: this.options.stripWidth,
                height: this.options.stripHeight,
                title: stripData[i].title,
                iconUrl: stripData[i].iconUrl
            });

            var yOffset = this.options.topOffset + this.options.stripOffset * i;

            var stripModifier = new Modifier({
                transform: Transform.translate(0, yOffset, 0)
            });

            this.stripModifiers.push(stripModifier);
            this._add(stripModifier).add(stripView);            
        }
    }

    module.exports = MenuView;
});
