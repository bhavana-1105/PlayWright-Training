function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
};
  
BankAccount.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        console.log("Insufficient funds");
    }
};
  
function SavingsAccount(accountNumber, balance, interestRate) {
BankAccount.call(this, accountNumber, balance);
this.interestRate = interestRate;
}
SavingsAccount.prototype = Object.create(BankAccount.prototype);
  
SavingsAccount.prototype.calculateInterest = function() {
return this.balance * this.interestRate;
};
  
function CurrentAccount(accountNumber, balance, overdraftLimit) {
BankAccount.call(this, accountNumber, balance);
this.overdraftLimit = overdraftLimit;
}
CurrentAccount.prototype = Object.create(BankAccount.prototype);

CurrentAccount.prototype.withdraw = function(amount) {
    if (amount <= this.balance + this.overdraftLimit) {
        this.balance -= amount;
    } else {
        console.log("Insufficient funds");
    }
};

const savingsAccount = new SavingsAccount(123456, 1000, 0.05);
const currentAccount = new CurrentAccount(654321, 500, 1000);

savingsAccount.deposit(500);
console.log(savingsAccount.balance); 
console.log(savingsAccount.calculateInterest()); 

currentAccount.withdraw(1500);
console.log(currentAccount.balance); 