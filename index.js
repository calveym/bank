window.onload = function () {

  BankAccount = function () {
    this.balance = 0;
    this.as = new AccountStatement();
  };

  BankAccount.prototype = {

    deposit: function (time, amount) {
      this.balance += amount;
      this.as.storeNewEntry(time, amount, "credit", this.balance);
    },

    withdraw: function (time, amount) {
      this.balance -= amount;
      this.as.storeNewEntry(time, amount, "debit", this.balance);
    }
  };

  AccountStatement = function () {
    this.history = [];
  };


  AccountStatement.prototype = {

    print: function () {
      console.log("date       ||   credit  ||   debit   || balance");
      for(i = 0; i < this.history.length; i++) {
        console.log(this.history[i].time + "|| " + this.history[i].credit + "|| " + this.history[i].debit + "|| " + this.history[i].balance);
      }
    },

    storeNewEntry: function (time, amount, type, bal) {
      var tempEntry = {};
      tempEntry.time = this.formatTime(time, 11);
      tempEntry.credit = this.formatCredit(type, amount, 10);
      tempEntry.debit = this.formatDebit(type, amount, 10);
      tempEntry.balance = bal;
      this.history.unshift(tempEntry);
    },

    formatTime: function (time, len) {
      // ASK MARY ABOUT WHY DIRECTLY USING THE VARS DIDNT WORK
      var repeatAmount = len - time.length;
      return (time.toString() + " ".repeat(repeatAmount));
    },

    formatCredit: function (type, amount, len) {
      var repeatAmount = (len - amount.toString().length);
      if(type === "credit") {
        return (amount + " ".repeat(repeatAmount));
      } else {
        return (" ".repeat(len));
      }
    },

    formatDebit: function (type, amount, len) {
      var repeatAmount = (len - amount.toString().length);
      console.log(type);
      if(type === "debit") {
        return (amount + " ".repeat(repeatAmount));
      } else {
        return (" ".repeat(len));
      }
    }
  };
};

















console.log("temp");
