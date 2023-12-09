// 'ForEach' didnt return the values But 'Filter' return the value and it used in basically when i use in arrays which content number 

const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array= arr.filter((val) => val>4)
console.log(array);

const next = arr.filter( (num) => {
    return num > 7
})
console.log(next);