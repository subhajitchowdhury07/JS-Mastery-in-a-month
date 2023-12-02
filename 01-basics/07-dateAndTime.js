let todayDate =  new Date();
 
console.log(todayDate);                  //2023-12-02T14:02:54.305Z
console.log(todayDate.toString());        //Sat Dec 02 2023 14:02:54 GMT+0000 (Coordinated Universal Time)
console.log(todayDate.toDateString());         // Sat Dec 02 2023
console.log(todayDate.toJSON());                // 2023-12-02T14:02:54.305Z
console.log(todayDate.toLocaleDateString());   //12/2/2023
console.log(todayDate.toLocaleString());        // 12/2/2023, 2:08:48 PM
                                                            
let myNewDate = new Date("1-17-2024")
console.log(myNewDate.toDateString());

console.log(typeof myNewDate);


let timeStamp = Date.now();
console.log(timeStamp);

console.log(myNewDate.toLocaleString('default', {
    weekday : "narrow",
    month : "long"
}));