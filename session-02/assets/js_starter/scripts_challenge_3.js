// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 5, 8, 2, 3]


// Check if the array includes the number 5
// let filterUsers = users.filter((user) => user.skills[0] === "JavaScript");

if (numbers.includes(5)){

// If true, filter out numbers less than 5
  let filtered = numbers.filter(num => num >= 5);
// Then square each number in the resulting array
  let squared = filtered.map(function(num){
    return num * num;
  });

// Output the final array
  console.log(squared);

}else{
// Output a message if the number 5 is not in the array
  console.log("Number 5 is not found");
}

