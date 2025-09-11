const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const toKelvin = document.getElementById("toKelvin");
const toCelsius1 = document.getElementById("toCelsius1");
const toKelvin1 = document.getElementById("toKelvin1");
const toFahrenheit1 = document.getElementById("toFahrenheit1");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(2) + "°C";
    }
    else if(toKelvin.checked){
        temp = Number(textBox.value);
        temp = temp + 273.15;
        result.textContent = temp.toFixed(2) + "K";
    }
    else if(toCelsius1.checked){
        temp = Number(textBox.value);
        temp = temp - 273.15;
        result.textContent = temp.toFixed(2) + "°C";
    }
    else if(toKelvin1.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9) + 273.15;
        result.textContent = temp.toFixed(2) + "K";
    }
    else if(toFahrenheit1.checked){
        temp = Number(textBox.value);
        temp = (temp - 273.15) * (9/5) + 32;
        result.textContent = temp.toFixed(2) + "°F";
    }
    else{
        result.textContent = "Select a unit"; 
    }
}