var fact = function(num){
  var result = num;
  for (var i = 1; i < num; i++){
       result = result * i;
      }
    return result;
};

fact(4); // 24
fact(5); // 120
fact(8); // 40320
