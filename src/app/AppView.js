define(function(require, exports, module) {
    var Surface         = require('famous/core/Surface');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var View            = require('famous/core/View');

    var PageView        = require('./PageView');
    var MenuView        = require('./MenuView');

    function AppView() {
        View.apply(this, arguments);

        _createPageView.call(this);
        _createMenuView.call(this);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {
        transition: {
            duration: 300,
            curve: 'easeOut'
        }
    };

    function _createPageView() {
        this.pageView = new PageView();
        this.pageView.on('menuToggle', this.toggleMenu.bind(this));

        this.pageModifier = new Modifier();

        this._add(this.pageModifier).add(this.pageView);
        this.menuToggle = false;
    }

    function _createMenuView() {
        this.menuView = new MenuView();
        this.menuModifier = new Modifier({
            transform: Transform.translate(0, 0, -1)
        });

        this._add(this.menuModifier).add(this.menuView);
    }

    AppView.prototype.toggleMenu = function() {
        if(this.menuToggle) {
            this.slideLeft();
        } else {
            this.slideRight();
        }
        this.menuToggle = !this.menuToggle;
    };

    AppView.prototype.slideLeft = function() {
        this.pageModifier.setTransform(Transform.translate(0, 0, 0), this.options.transition);
    };

    AppView.prototype.slideRight = function() {
        this.pageModifier.setTransform(Transform.translate(276, 0, 0), this.options.transition);
    };

    module.exports = AppView;
});
