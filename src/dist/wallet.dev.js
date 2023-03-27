"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Wallet =
/*#__PURE__*/
function () {
  // Сделать: constructor, addCoin() и getBalance()
  function Wallet() {
    _classCallCheck(this, Wallet);

    this.coins = [];
  }

  _createClass(Wallet, [{
    key: "addCoin",
    value: function addCoin(coin) {
      this.coins.push(coin);
    }
  }, {
    key: "getBalance",
    value: function getBalance() {
      return this.coins.reduce(function (a, b) {
        return a + b.getValue();
      }, 0);
    }
  }]);

  return Wallet;
}();

exports["default"] = Wallet;