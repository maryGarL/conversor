
var temp1 = document.getElementById('celcius');
var temp2 = document.getElementById('fahrenheit');

function convertirCelcius(){
 temp1.value = (5/9)*(temp2.value-32);
};

function convertirFarenheit(){
 temp2.value = (temp1.value*9/5)+32;
};
