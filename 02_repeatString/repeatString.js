const repeatString = function(cadena,numero) {
    let nuevacadena = "";
    for(let i=0;i<numero;i++){
        
        nuevacadena +=cadena;
    }
    return nuevacadena;
};

// Do not edit below this line
module.exports = repeatString;
