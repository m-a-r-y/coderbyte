var xo = function(str){
var count = str.split("");
var x = [];
var o = [];

for(var i = 0; i < count.length; i++){
    if(count[i] == "x") {
        x = x + count[i];
    } else { o = o + count[i]; }
}

if (x.length == o.length) {
    return true;
} else return false;

};

xo("xoxo"); //true
xo("xxooo"); //false
