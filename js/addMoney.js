document
  .getElementById("money-add-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyInput = moneyOutInCal('add-money-input');
    const inputPin = moneyOutInCal('add-money-pin');

    if(isNaN(addMoneyInput)){
      alert("Please type number and add money");
      return;
    }
    
    if(inputPin === 1234){
      const currentBalance = getInnerTextValue("current-balance");
      const newBalance = currentBalance + addMoneyInput;

      // added new balance
      document.getElementById('current-balance').innerText = newBalance;

      // added transaction history
      const p = document.createElement('p');
      p.innerText = ` ${addMoneyInput} Tk. added and New balance: ${newBalance} Tk. `;
      const transactionAdd = document.getElementById('transaction-container');
      transactionAdd.appendChild(p);

    }else{
      alert("Enter valid information");
    }

  });
