// denominator=2
//first element =4
//n=72
//сума елементів геометричної прогресії 
let denominator = 2;
let firstsEl = 4;
let quantity = 72;
let sum = 0;

for (let i=1; i<=11; i++) {
    console.log(firstsEl * Math.pow(denominator, i - 1));
    sum += firstsEl * Math.pow(denominator, i - 1)
}

console.log(sum);