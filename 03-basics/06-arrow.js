const user={
    userName : "Subha",
    price: 333,

    Wlcomemessage:function(){
        console.log(`${user.userName}, Wlcome to the server`)
    }
}
// console.log(user.Wlcomemessage())

// const test = () => {                      // => this is a arrow function 
//     let name =  "subhajit"
//     console.log(this.name)
// }

// test()

const addTwo = (nums1 , num2) =>{
    return nums1+ num2
}

console.log(addTwo(3, 7));

const addOne = (nums1 ,  nums2) => (nums1 + nums2)
console.log(addOne(8, 9));

const add3 = (nums1 , num2) => ({username : "subhajit c "})
console.log(add3());