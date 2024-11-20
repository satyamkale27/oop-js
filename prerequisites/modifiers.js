class BankAccount {
  #balance; // Private fields start with #
  #accountNumber;

  constructor(initialBalance) {
    this.#balance = initialBalance;
    this.#accountNumber = this.#generateAccountNumber();
  }

  // Private method
  #generateAccountNumber() {
    return Math.floor(Math.random() * 1000000);
  }

  // Public method accessing private fields
  getBalance() {
    return this.#balance;
  }
  deposit(amount) {
    if (this.#validateAmount(amount)) {
      this.#balance = this.#balance + amount;
    }
  }

  #validateAmount(amount) {
    return amount > 0;
  }
}

const user = new BankAccount(1000);
console.log(user.getBalance());
user.deposit(500);
console.log(user.getBalance());
