var fruits = "bananas";

var up = function(a){
var splitMe = a.split("");
var vowels = ["a","e","i","o","u"];
var storage = [];

    for (var i = 0; i < splitMe.length; i++){
     storage[i] = String.fromCharCode(splitMe[i].charCodeAt() + 1);


     if(vowels.indexOf(storage[i]) > 0 ){
         storage[i] = storage[i].toUpperCase();
     }
    }

    return storage.join("");
};

up(fruits);

