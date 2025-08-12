// Challenge 4 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Find the index of the number 5 in the array
let index = numbers.indexOf(5);


// If the number 5 is found in the array
if(index !== -1){
    for (let i = 0; i <= index; i ++)

// Console log each number in the array up to and including 5
    console.log(numbers[i]);

// Output a message if the number 5 is not in the array
}else{
    console.log("Number 5 is not found");
}

