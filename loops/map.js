const newArr=[ 1,2,3,4,5,6,7,8,9,10]
// let testing = newArr.map( (num) => num +10)
// console.log(testing);

// testing = newArr.filter( (nm)=> {
//     return nm > 4 
// })
// console.log(testing);

// const newNums=[];
// testing = newArr.forEach( (nm)=> {
//     if(nm > 4){
//         newNums.push(nm)
//     }
   
// })
// console.log(newNums);

// let testing = newArr.map( (val) => val > 4)
// console.log(testing);


/* ******************************** chainnig **************************************/

const newNums = newArr
                    .map( (num) => num *10)
                    .map((num) => num +1)
                    .filter((num) => num > 40)

                    console.log(newNums);