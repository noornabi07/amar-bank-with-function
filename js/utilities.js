function inputValueFromId(id){
    const inputText = document.getElementById(id);
    const inputValueString = inputText.value;
    const inputValueNumber = parseFloat(inputValueString);
    inputText.value = ''
    return inputValueNumber;
}

function elementValueFromId(id){
    const elementText = document.getElementById(id);
    const elementValueString = elementText.innerText;
    const elementValueNumber = parseFloat(elementValueString);
    return elementValueNumber;
}

function setElementValue(id, newValue){
    const setElement = document.getElementById(id);
    setElement.innerText = newValue; 
}