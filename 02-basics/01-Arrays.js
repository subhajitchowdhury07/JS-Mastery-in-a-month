const arr = [12 , 3, 5, 7 , "how are u ", 8]

arr.push(9)
arr.push(73)
// arr.pop()
arr.unshift(20)
console.log(arr);

console.log(arr.toString());

let myArrr= arr.join();
console.log(myArrr);


/*  ******************** [slice] and [splice] ***********************************/

const NewArr2 = [3 , 98 , 34, 5,7,9]
console.log(NewArr2);
console.log(NewArr2.slice(1 , 3))   // slice is used to enquary the values that u maintioned
console.log(NewArr2.splice(1 , 3))  // splice is used to remove totally values from the array
console.log(NewArr2);
