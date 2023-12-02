const name = "Mrinmoy";
const id = 73;

// console.log(name + id +"value");

console.log(`hello my name is ${name} and my id is ${id}`);

const gameName= new String("god of war");

// console.log(gameName[0]);
// console.log(gameName[4]);
console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(5));  // to find through index value

console.log(gameName.indexOf('o'));  // to find through any charecter

const newString= gameName.substring(0 , 3)  // to break a string into sub strings
console.log(newString);

const newString_2 = gameName.slice(0, 3);  // it also work as same as subString but it can take negetive value also
console.log(newString_2)


let newString_3 = "     subhaa    "
console.log(newString_3);
console.log(newString_3.trim());

const url = "https://subha.com/subha-alpha/alpha-repo"

console.log(url.replaceAll('-' , '%20'))  // to replace string with any string
 console.log(url.includes('subha'))  // to find or query any thing 


 const newName = "subha-jit-chowdhury-and-swarup-chowdhury"
//  console.log(newString_3.__proto__);

console.log(newName.split('-'));

// console.log(`how are you ${newName} and what about ${url} and 2nd string are ${newString_2}`);
console.log(newName.fontcolor(red, newName));