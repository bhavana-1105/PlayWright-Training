class BankCustomer {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

class BankAccount {
    constructor(customer, balance) {
        this.customer = customer;
        this.balance = balance;
    }
}
  
  // Create a customer
  const customer = new BankCustomer("Automation", "Tester");
  
  // Create two accounts for the same customer
  const account1 = new BankAccount(customer, 1000);
  const account2 = new BankAccount(customer, 2000);

  console.log(account1);
  console.log(account2);