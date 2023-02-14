document.getElementById('withdraw-btn').addEventListener('click', function(){
    const previousWitdraw = elementValueFromId('previous-withdraw');
    const newWithdraw  = inputValueFromId('withdraw-input');

    const withdraw = previousWitdraw + newWithdraw;
    setElementValue('previous-withdraw', withdraw);

    const haveFound = elementValueFromId('balance');
    const currentFound = haveFound - newWithdraw;

    setElementValue('balance', currentFound);
})


