"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bitcoin = exports.Ether = exports.Coin = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Не удаляйте ключевое слово "export"
var Coin =
/*#__PURE__*/
function () {
  // Сделать: constructor, collect(), getValue(), getMessage()
  function Coin(name, price) {
    _classCallCheck(this, Coin);

    this.name = name;
    this.price = price;
    this.count = 0;
  }

  _createClass(Coin, [{
    key: "collect",
    value: function collect() {
      return this.count++;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.count * this.price;
    }
  }, {
    key: "getMessage",
    value: function getMessage() {
      return "".concat(this.count, " ").concat(this.name, " \u0432 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0435");
    }
  }]);

  return Coin;
}();

exports.Coin = Coin;

var Ether =
/*#__PURE__*/
function (_Coin) {
  _inherits(Ether, _Coin);

  // Сделать: constructor и наследование
  function Ether() {
    _classCallCheck(this, Ether);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ether).call(this, "Ether", 3000));
  }

  return Ether;
}(Coin);

exports.Ether = Ether;

var Bitcoin =
/*#__PURE__*/
function (_Coin2) {
  _inherits(Bitcoin, _Coin2);

  // Сделать: constructor и наследование
  function Bitcoin() {
    _classCallCheck(this, Bitcoin);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bitcoin).call(this, "Bitcoin", 50000));
  }

  return Bitcoin;
}(Coin);

exports.Bitcoin = Bitcoin;