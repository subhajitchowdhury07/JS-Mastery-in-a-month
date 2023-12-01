// console.log("2" === 2)
// console.log("2" > 4);


//******* stack (premitive),  Heap ( Non premitive) ***************


let mySurname =" chowdhury";
let myTitle = mySurname;

myTitle = "Subhajit chowdhury"
console.log(myTitle);
console.log(mySurname);

let parentsName={
    ma:"anjana chowdhury",
    baba: "Swarup chowdhury"
}

let totalName = parentsName;
totalName.ma = "Anjana";
console.log(parentsName);
console.log(totalName);
