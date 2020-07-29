// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?


const listSum = ( array, sum ) => {
    var sumArray = [];
    for( let i = 0; i < array.length; i++ ) {
        console.log( array[i]  + array[i + 1]);
        for (let j = i + 1; j < array.length;j++){
            if(array[i] + array[j] === sum){
                sumArray.push([array[i], array[j]])
            }
        }
    }        
}



let myStringArray = [10, 15, 3, 7];
let numberSum = 17;
listSum(myStringArray,numberSum);


