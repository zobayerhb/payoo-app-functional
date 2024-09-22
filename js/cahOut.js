document.getElementById('cast-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = moneyOutInCal('cash-out-input')
    const cashOutPin = moneyOutInCal('cash-out-input-pin');

    if(cashOutPin === 1234){
        const currentBalance = getInnerTextValue('current-balance');

        // check cash out balance and new balance difference
        if(cashOutAmount > currentBalance){
            alert("You don't have enough money! please add money first..")
            return;
        }

        const newBalance = currentBalance - cashOutAmount;

        document.getElementById('current-balance').innerText = newBalance;

        // added cash out transaction history
        const div = document.createElement("div");
        div.style.backgroundColor = 'blue';
        div.innerHTML = `
        
        <h1 class="font-medium">Cash Out</h1>
        <p>${cashOutAmount} Tk. withdraw and new balance ${newBalance} Tk.</p>

        `
        const cashOutTransaction = document.getElementById('transaction-container');
        cashOutTransaction.appendChild(div);
    }
    
})