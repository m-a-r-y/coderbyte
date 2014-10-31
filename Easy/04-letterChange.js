var fruits = "apples";

var up = function(a){
var splitMe = a.split("");

var storage = "";

    for (var i = 0; i < splitMe.length; i++){
     storage += String.fromCharCode(splitMe[i].charCodeAt() +1);
    }

    return storage;
};

up(fruits);
