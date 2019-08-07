'use strict';
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2); //再帰
}
const length = 40;
for (let i = 0; i < length; i++) {
    console.log(fib(i));
}

/* n = 40 での実行時間
real    0m8.629s
user    0m8.596s
sys     0m0.024s */