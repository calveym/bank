window.onload = function () {

  BankAccount = function () {
    this.balance = 0;
    this.accountStatement = new AccountStatement();
  };

  BankAccount.prototype = {

    deposit: function (time, amount) {
      this.balance += amount;
      this.accountStatement.storeNewEntry(time, amount, "credit");
    },

    withdraw: function (time, amount) {
      this.balance -= amount;
      this.accountStatement.storeNewEntry(time, amount, "debit", this.balance);
    }
  };

  AccountStatement = function () {
    this.history = [];
  };


  AccountStatement.prototype = {

    print: function () {
      for(i = 0; i < this.history.length; i++) {
        console.log("date     || credit || debit  || balance");
        console.log(this.history[i].date.padEnd(10) + "|| " + this.history[i].credit.padEnd(8) + "|| " + this.history[i].debit.padEnd(8) + "||" + this.history[i].balance);
      }
    },

    storeNewEntry: function (time, amount, type, balance) {
      var tempEntry = {
        time: time,
        credit: "",
        debit: "",
        balance: balance
      };
      if (type === "debit") {
        tempEntry.debit = amount.toString();
      } else {
        tempEntry.credit = amount.toString();
      }
    }
  };
};
