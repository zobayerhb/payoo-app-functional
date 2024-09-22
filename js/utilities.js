
function moneyOutInCal(id){
    const inputValue = document.getElementById(id).value;
    const convertNumber = parseFloat(inputValue);

    return convertNumber;
}

function getInnerTextValue(id){
    const innerTextValue = document.getElementById(id).innerText;
    const textValueConNum = parseFloat(innerTextValue);

    return textValueConNum;
}

function showSection(id){
    const sectionShowId = document.getElementById(id).innerText;

    return sectionShowId;
}

// feature function here start
function getAllSection(id){

    document.getElementById("show-add-money-section").classList.add("hidden");
    document.getElementById("cash-out-section").classList.add("hidden");
    document.getElementById("transaction-section").classList.add("hidden");

    // remove hidden class when i click any section
    document.getElementById(id).classList.remove("hidden");
}



