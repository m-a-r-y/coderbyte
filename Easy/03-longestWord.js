var sen = "San Francisco is in California";

var long = function (sen) {

var word = sen.split(" ");
var count = [word[0]];


console.log(count[0].length);

for (var i = 1; i < word.length; i++) {
    if (word[i].length > count[0].length) {
        count.pop();
        count.push(word[i]);
    }
}

return count;
};

long(sen);

