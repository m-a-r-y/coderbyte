var time = function(num){
    var hour = Math.floor(num/60);

    var min = num%60;

    return hour+":"+min;
};

time(128); // 2:8
time(45); // 0:45
time(63); // 1:3
