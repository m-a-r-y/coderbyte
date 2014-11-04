var count = function(a){
var letters = a.split("");
var vowels = ["a","e","i","o","u"];
var cv = [];

  for(var i = 0; i < letters.length; i++) {
   if (vowels.indexOf(letters[i]) != -1) {
       cv = cv + letters[i];
   }
  }

return cv.length;

};

count("count my vowels"); //4
