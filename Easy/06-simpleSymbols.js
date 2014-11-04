// split the string into an array of characters
// loop through the array
// set loop conditions to return false, otherwise setting conditions to return true will end loop prematurely

// if (current index is a letter) &&
// check (if index before/after is not "+") return false

// return true outside of loop

var symb = function(a){

    var char = a.split("");
    var alpha = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < char.length; i++){
        if(alpha.indexOf(char[i]) != -1 &&
           (char[i-1] != "+" || char[i+1] != "+")) {
            return false;
        }
    }
    return true;
};

//symb("+b+"); //true
//symb("+b+b+b+"); //true
//symb("+b+mm+"); //false
//symb("+b+b+"); //false
//symb("b+b+"); //false
//symb("+m+mm+=+b+==+b+"); //false
