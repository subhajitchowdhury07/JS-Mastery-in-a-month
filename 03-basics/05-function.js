function newfn(){
    console.log("play game")
    console.log("how r u");
    // hi : "you are a such a bad guy";
}

newfn()

function addTwoNumbers(number1, number2){
    let X = number1+ number2
    return X;
}

let X = addTwoNumbers(43 , 5)

console.log(`print the reasuls was ${X}`);
console.log(`print the reasuls was`,X);

// to check user logedin or not 


function userLoginStatus(username){
    if(!username){
        console.log("Please provide the username");
        return;
    }
    return `${username} just successfully loged In`
}

console.log(userLoginStatus("58"));