const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//we declare a new variable called totalBatteries
//it takes in an array and calls the reduce method onn it
//the first argument of this method is a callback function that has an accumulator and the elements of the array as its parameters
//it returns the total  number of batteries by adding each element to the previous value
//this is done through iteration
//NB we set the initialization value as 0 so that the method includes the first value in the array
const totalBatteries = batteryBatches.reduce (function(accumulator,element){
    return accumulator + element;
},0);