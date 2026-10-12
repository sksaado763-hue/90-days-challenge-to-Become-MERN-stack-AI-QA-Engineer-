const name = "Saad";

const age = 22;

let isDeveloper = true;


console.log("name : " + name);
console.log("Age is " + age);
console.log("Developer " + isDeveloper);

//Task 1 — Variables
//const, let, aur var ka difference comments mein explain karo.
/*
const : is the veriables of javaScript that can store data in constant form formate .we did not update and not redeclear it .it have block scop;

let : it is veriable in js data can store data . i have a block scop we can redeclear it we can update it ;

var : golble access veriable we can access from any whare and update and redeclear ; 
*/

// task 2
let st_Name = "saad khan";
let rollno = 221150;
let login = true;
let fname;
let x = ""
let array =[];
let students ={
    name: "aslam",
    fname :"jawad khan",
    age : "16"
}
console.log(typeof(st_Name));
console.log(typeof(rollno));
console.log(typeof(login));
console.log(typeof(fname));
console.log(typeof(array));
console.log(typeof(students));
console.log(typeof(x));


// task 3
/*
Aisa program banao:

age >= 18 → "Adult"
age < 18  → "Minor" 
*/

if (age >= 18){
    console.log("adult");
}else{
    console.log("Minor")
}

// task number 4

function calculateAge (){
  const birthday =prompt("enter your birthday :" );
  const curentyear = 2026;
  let age = birthday -curentyear

  return age;

}
calculateAge;

// -------Task 5----------
/*
Use karke:

total skills count karo
first skill print karo
last skill print karo
MongoDB add karo
CSS remove karo */


const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];

console.log(skills.length);
console.log(skills[0]);
console.log(skills[4]);
console.log(skills.push("MongoDB"));
console.log(skills.splice(2))


// task 6

function checkNumber(number){
    if(number > 0){
        console.log("postive number")
    }
    else if(number < 0){
        console.log("negative number")
    }
    else{
        console.log("the number is Zero")
    }
}
checkNumber(45);

// const numbers = [1, 2, 3, 4, 5];


const newNumber = numbers.map( (a)=>{
        return a+a
})

const numbers = [10, 15, 20, 25, 30, 35, 40];

const evenNumber = numbers.filter( (number) =>{
        return number % 2 === 0;
})

console.log(evenNumber);

const gtr20 = numbers.filter((number)=>{

    return number > 20

})

console.log(gtr20)



const users = [
    { name: "Ali", age: 20 },
    { name: "Saad", age: 22 },
    { name: "Ahmed", age: 25 }
];

const FindUser = users.find((user)=>{
     return user.name === "saad"
})
console.log(FindUser)