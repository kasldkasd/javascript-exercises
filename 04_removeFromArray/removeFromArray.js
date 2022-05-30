const removeFromArray = function(list) {
    for(let i=arguments.length-1;i>0;i--){
        if (arguments[i]!=undefined){
            if(list.includes(arguments[i])){
                let wordindex = list.indexOf(arguments[i]);
                list.splice(wordindex,1); 
            }
    }
} return list;
};

// Do not edit below this line
module.exports = removeFromArray;
