define(function(require, exports, module) {
    var Surface         = require('famous/core/Surface');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var View            = require('famous/core/View');

    var HeaderView      = require('./HeaderView');

    function PageView() {
        View.apply(this, arguments);

        _createHeaderView.call(this);
        _setListeners.call(this);
    }

    PageView.prototype = Object.create(View.prototype);
    PageView.prototype.constructor = PageView;

    function _createHeaderView() {
        this.headerView = new HeaderView();

        this.subscribe(this.headerView);

        this._add(this.headerView);
    }

    function _setListeners() {
        this._eventInput.on('menuToggle', function() {
            this._eventOutput.emit('menuToggle');
        }.bind(this));
    }

    module.exports = PageView;
});
