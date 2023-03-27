export default class Wallet {
	// Сделать: constructor, addCoin() и getBalance()
	constructor() {
	  this.coins = [];
	}
	addCoin(coin) {
	  this.coins.push(coin);
	}
	getBalance() {
	  return this.coins.reduce((a, b) => {
		 return a + b.getValue();
	  }, 0);
	}
 }