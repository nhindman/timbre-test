define(function(require, exports, module) {
    var Surface         = require('famous/core/Surface');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var View            = require('famous/core/View');

    var HeaderView      = require('./HeaderView');

    function PageView() {
        View.apply(this, arguments);

        _createHeaderView.call(this);
        _createBody.call(this);
        _setListeners.call(this);
    }

    PageView.prototype = Object.create(View.prototype);
    PageView.prototype.constructor = PageView;

    function _createHeaderView() {
        this.headerView = new HeaderView();

        this.subscribe(this.headerView);

        this._add(this.headerView);
    }

    function _createBody() {
        this.bodySurface = new Surface({
            size: [320, 504],
            content: '<img width="320" src="../img/body.png"/>'
        });

        this.bodySurface.pipe(this._eventOutput);

        this.bodyModifier = new Modifier({
            transform: Transform.translate(0, 44, 0)
        });

        this._add(this.bodyModifier).add(this.bodySurface);
    }

    function _setListeners() {
        this._eventInput.on('menuToggle', function() {
            this._eventOutput.emit('menuToggle');
        }.bind(this));
    }

    module.exports = PageView;
});
