var str = "something goes here";

var rev = function(str){
return str.split("") // split the whole string into individual letters
              .reverse() // reverse the letters
              .join(""); // rejoin the letters into a string
};

rev(str); // call the function passing str
