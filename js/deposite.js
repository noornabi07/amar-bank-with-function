document.getElementById('deposite-btn').addEventListener('click', function(){
    // deposite part:----
    const inputValue = inputValueFromId('deposite-input');
    const elementValue = elementValueFromId('previous-deposite');

    // set element deposite value form function
    const totalDepositeValue = inputValue + elementValue;
    setElementValue('previous-deposite', totalDepositeValue);
    
    const balanceCalculate = elementValueFromId('balance');
    // set element total balance from function
    const currentBalance = balanceCalculate + inputValue;
    setElementValue('balance', currentBalance);

})

