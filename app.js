const celcius = document.getElementById('cel');
const fahrenhite = document.getElementById('farhan');

celcius.addEventListener('input', function(){
    const tempC = parseFloat(celcius.value);
    const tempF = {tempC * (9/5)} + 32
    console.log(tempC);
});














