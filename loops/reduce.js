const arr=[ 1, 2, 3]

const newArr = arr.reduce( function (accumuletor , currentvalue){
    console.log(`accumulator : ${accumuletor} and  currentvalue are ${currentvalue}`);
    return accumuletor + currentvalue;
},0)
console.log(newArr);

const arr2 = arr.reduce()