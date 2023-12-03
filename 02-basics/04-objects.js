const newObj= {};
newObj.id = 635;
newObj.name = "subhajit"

// console.log(newObj);

newObj2 = {
    fullname : "alpha chowdhury",
    class : "XII",
    another :{
        name:{
            fullname: "subhajit"
        }
    }
}

// console.log(newObj2.another);


const oneobj= {
    1: "ad",
    2 : "nnf"
}
const oneobj1= {
    3: "ad",
    4 : "nnf"
}

const obj3 = {...oneobj, ...oneobj1}

console.log(obj3);


console.log(Object.keys(newObj));  // using this you get all Keys [But in array format]
console.log(Object.values(newObj));  // ,, ,,, you get all values [ ,, ,, ,, ,, ]
console.log(Object.entries(newObj));  // you get all and each key value pair in array format