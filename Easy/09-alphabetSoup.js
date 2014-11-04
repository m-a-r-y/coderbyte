var soup = function(str){
  var letter = str.split("");

  for (var i = 0; i < letter.length; i++){
    letter.sort();
  }
    return letter.join("");
};


soup("cat"); // 'act'
