const getTheTitles = function(list) {
    let nuevoarreglo = [];
    for(let i=0;i<list.length;i++){
        nuevoarreglo.push(list[i]["title"]);
    }
    return nuevoarreglo;
};

// Do not edit below this line
module.exports = getTheTitles;
