"use strict";

var _wallet = _interopRequireDefault(require("./wallet.js"));

var _coins = require("./coins.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ether = new _coins.Ether();
var bitcoin = new _coins.Bitcoin();
var wallet = new _wallet["default"]();

try {
  wallet.addCoin(ether);
  wallet.addCoin(bitcoin);
} catch (error) {
  console.error(error);
}

var addEth = document.querySelector("#add-eth");
var addBtc = document.querySelector("#add-btc");
var ethBalance = document.querySelector("#eth-balance");
var btcBalance = document.querySelector("#btc-balance");
var totalBalance = document.querySelector("#total-balance");

var render = function render() {
  try {
    ethBalance.textContent = ether.getMessage();
    btcBalance.textContent = bitcoin.getMessage();
    totalBalance.textContent = wallet.getBalance();
  } catch (error) {
    console.error(error);
  }
};

addEth.addEventListener("click", function () {
  ether.collect();
  render();
});
addBtc.addEventListener("click", function () {
  bitcoin.collect();
  render();
});