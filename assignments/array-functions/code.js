const countTens = (numbers) => {
let count = 0;
for (let i = 0; i < numbers.length; i++){
  if (numbers[i]===10) {
      count ++;
    }
  }
return count
}


const sum = (numbers) => {
let count = 0;
for (let i = 0; i < numbers.length; i++){
  count=count+numbers[i]

}
return count
}

const evens = (numbers) => {
let result = [];
for (let i = 0; i < numbers.length; i++){
 if(numbers[i]%2 ===0){
   result.push(numbers[i])
 }

}
return count
}