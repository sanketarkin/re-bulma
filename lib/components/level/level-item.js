'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('../../../build/styles');

var _styles2 = _interopRequireDefault(_styles);

var _helper = require('../../helper/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LevelItem = function (_Component) {
  _inherits(LevelItem, _Component);

  function LevelItem() {
    _classCallCheck(this, LevelItem);

    return _possibleConstructorReturn(this, (LevelItem.__proto__ || Object.getPrototypeOf(LevelItem)).apply(this, arguments));
  }

  _createClass(LevelItem, [{
    key: 'createClassName',
    value: function createClassName() {
      return [_styles2.default.levelItem, this.props.hasTextCentered ? _styles2.default.hasTextCentered : '', this.props.className].join(' ').trim();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({}, (0, _helper.getCallbacks)(this.props), {
          style: this.props.style,
          className: this.createClassName()
        }),
        this.props.children
      );
    }
  }]);

  return LevelItem;
}(_react.Component);

LevelItem.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  hasTextCentered: _propTypes2.default.bool
};
LevelItem.defaultProps = {
  style: {},
  className: ''
};
exports.default = LevelItem;