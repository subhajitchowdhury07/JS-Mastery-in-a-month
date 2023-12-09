const map = new Map()
map.set('IN', "India")
map.set('USA',"United state of america")
map.set('FR',"France")
map.set('IN', "India")

// console.log(map);
for (const key of map) {
    console.log(key);
}

// for (const [key, value] of map) {     // here we desturacture the array
//     console.log(key ,':-' ,value )
    
// }


const myObj = {
    js : "javascript",
    rb : "rubi",
    apple : "apple"
}

// for (const key in myObj) {
//    console.log(`${key} shortcut is for ${myObj[key]}`);
// }

for (const key in myObj) {          // if we use just normal 'key' then it return only those keys, nut when we write keys under '[]' this then it return values.
   console.log(key);
}