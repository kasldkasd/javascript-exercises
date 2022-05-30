const reverseString = function(cadena) {
    let cadenanueva = "";
    for(let i=cadena.length-1;i>=0;i--){
        cadenanueva += cadena[i];
    }
    return cadenanueva;

};

// Do not edit below this line
module.exports = reverseString;
