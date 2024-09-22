document.getElementById('btn-add-money').addEventListener('click', function(){
    console.log("Add money button click");
    getAllSection("show-add-money-section");
})

document.getElementById("btn-cash-out").addEventListener('click', function(){
    console.log("Cash out button click");
     getAllSection('cash-out-section');
})

document.getElementById("transaction-btn").addEventListener('click', function(){
    getAllSection('transaction-section')
})