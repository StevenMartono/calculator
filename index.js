display = document.getElementById("display-number-input");

function addToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = " ";
}

function deleteNumber(){
    display.value = display.value.slice(0,-1)
}

function count(){
    display.value = eval(display.value)
}