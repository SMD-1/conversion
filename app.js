const celcius = document.getElementById('cel');
const fahrenhite = document.getElementById('farhan');


function roundOf(num){
    return Math.round(num*100) / 100;
}


function celToFehr(){
    const tempInC = parseFloat(celcius.value);
    const tempInF = (tempInC * (9/5) ) + 32;
    fahrenhite.value = roundOf(tempInF);
}

function fehrToCel(){
    const tempInF = parseFloat(fahrenhite.value);
    const tempInC = (5/9) * (tempInF - 32);
    celcius.value = roundOf(tempInC);
}

celcius.addEventListener('input', celToFehr);
fahrenhite.addEventListener('input', fehrToCel);














