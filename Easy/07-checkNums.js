var check = function(a,b) {
    if (b == a) { return "-1"}
    else if (b < a) { return false }
    else return true;
};

check(1,2); //true
check(2,2); // -1
check(3,1); // false
