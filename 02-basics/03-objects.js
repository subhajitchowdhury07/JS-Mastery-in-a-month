//singleton objects

// object leterals

const mySym = Symbol("key1");

const justUser = {
    name : "subhajit chowdhury",
    [mySym]: "key12",
    dept : "MCA",
    roll : 96,
    "email id" : "Subhajai20@gmail.com",
    add : "durgapur",
    login : [ "sunday", "Monday"]


}

// console.log(justUser.name);
// console.log(justUser["email id"]);
// console.log(justUser[mySym]);

justUser["email id"] = "alpha20@gmail.com"  // ' = ' is used for update
// Object.freeze(justUser);                   // using freeze we can stop to modife with objects
justUser["email id"]= "areepaglaa@gmail.com"
// console.log(justUser);

justUser.greeting = function(){
    console.log("hello, user ");
};
justUser.Two = function(){
    console.log(` hello, subha, ${this["email id"]} ` );
};


console.log(justUser.greeting())
console.log(justUser.Two())
