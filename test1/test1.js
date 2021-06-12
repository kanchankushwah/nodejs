'use strict';
console.log("Hello");
/*
const student = [
    ['rajan','X', 2007,[44,68,70],true],
    ['naveen','X', 2008,[34,57,66],false],
    ['rani','XI', 2006,[76,68,55],true],
    ['ankit','XII', 2006,[59,37,60],true]
];
const child = [];

for (let i=0; i <student.length; i++){

//console.log(student[i], typeof student[i]);

child[i] = student[i];

}
//console.log(child);

let dice= Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
    console.log(`Your No is ${dice}`);
    dice= Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('The End');
} 
*/


//console.table(temprature);

const calcAverageTemp = function(temp, temp_1){
  const temprature = temp.concat(temp_1);
  console.log(temprature);

    let maxTemp = temprature[0];
    let minTemp = temprature[0];

    for(let i=0; i<temprature.length; i++){
        const currTemp = temprature[i];
        if (currTemp > maxTemp) maxTemp = currTemp;
        if (currTemp < minTemp) minTemp = currTemp;
    }

    console.log(maxTemp, minTemp);
    return maxTemp - minTemp;
};

const averAge = calcAverageTemp([3,4,-9,8] , [5,7,3,-2]);
console.log(averAge);
