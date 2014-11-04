//split str into letter array
//take out spaces!!
//reverse letters
//rejoin letters
//compare original to modified

var palindrome = function(str){
var spacerm = str.replace(/\s+/g, '');
var pali = spacerm.split("")
                 .reverse()
                 .join("");

if (spacerm == pali){
    return true;
} else return false;


return pali;
};

palindrome("ra cec ar"); //true
