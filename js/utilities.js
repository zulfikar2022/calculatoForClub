document.querySelector('.del').addEventListener('click',function(event){
    const currentString = document.getElementById('input-section').value;
    const currentStringArray = currentString.split('');
    currentStringArray.pop();
    const newString = currentStringArray.join('');
    setDataToOutputField('input-section',newString);
});

function getDataFromInputFieldAndCalculate() {
    const inputFieldStringData = document.getElementById('input-section').value;
  
    const numberOrNot = parseFloat(inputFieldStringData);
    if (isNaN(numberOrNot)) {
        alert('invalid input !!!');
        document.getElementById('input-section').value = '';
        document.getElementById('output-section').value = '';
        return 'undefined';
    }
    if(isNaN(numberOrNot+'')){
        alert('please enter valid input ');
        return 'undefined';
    }
    const outputResult = eval(inputFieldStringData);
    return outputResult;
}

function setDataToInputField(elementId, data) {
    const outputElement = document.getElementById(elementId);
    outputElement.value += data;
}

function setDataToOutputField(elementId, data) {

    const outputElement = document.getElementById(elementId);
    outputElement.value = data;
}

// Universal setting to the input field

function universalSetting(btnClass, setElementId, dataToSet) {
    document.querySelector('.' + btnClass).addEventListener('click', function () {
        setDataToInputField(setElementId, dataToSet);
    })
}


//here the function goes 

// 0 to 9 input 

universalSetting('one', 'input-section', '1');
universalSetting('two', 'input-section', '2');
universalSetting('three', 'input-section', '3');
universalSetting('four', 'input-section', '4');
universalSetting('five', 'input-section', '5');
universalSetting('six', 'input-section', '6');
universalSetting('seven', 'input-section', '7');
universalSetting('eight', 'input-section', '8');
universalSetting('nine', 'input-section', '9');
universalSetting('zero', 'input-section', '0');
universalSetting('point', 'input-section', '.');
// universalSetting('pi', 'input-section', Math.PI);


// + , - , * /(division), '(' (opening parenthesis) and ')' (closing parenthesis) input

universalSetting('plus', 'input-section', '+');
universalSetting('minus', 'input-section', '-');
universalSetting('multiplication', 'input-section', '*');
universalSetting('division', 'input-section', '/');
universalSetting('opening-parenthesis', 'input-section', '(');
universalSetting('closing-parenthesis', 'input-section', ')');

//  = 
document.querySelector('.equal').addEventListener('click', function () {
    const result = getDataFromInputFieldAndCalculate();
    if (result === 'undefined') {
        // setDataToOutputField('output-section',' ');
        return;
    }
    setDataToOutputField('output-section', result);
});

//  AC
document.querySelector('.ac').addEventListener('click', function () {
    document.getElementById('input-section').value = '';
    document.getElementById('output-section').value = '';
});


