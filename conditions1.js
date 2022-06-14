console.log("Hello World");

//This is where we create a random number between 0.0-1
let randomNumber = Math.random();

console.log(randomNumber); 
//This is where we explain that the  if condition specfied number alied with the requirment so that the code will run
if (randomNumber < 0.5) {

    console.log("Condition was met");
    console.log(randomNumber);

}

if (randomNumber >= 0.5) {

    console.log("condition was met");
    console.log(randomNumber);

}

If Else Statement:



const dayOfWeek = 'saturday';

if (dayOfWeek === 'Monday') {

    console.log('Yay its Monday');

} else if (dayOfWeek === 'Friday') {

    console.log("Yay its Friday");

} else if (dayOfWeek ===  'Saturday') {

    console.log("You have the correct Day from the variable");
}


const age = prompt('ENTER AN AGE');


if (age < 5) {
    console.log("Hey, you're just a baby!");
} else if (age < 10) {
    console.log("Hey your're just a kid!");
} else if (age < 35) {
    console.log("You're getting older.");
}
// if all other condotions fail- else
else {

    console.log("you are over the age of 35.");
} 


const expr = 'Papayas';

switch (fruit) {

    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;    
    case 'Bananas':
        console.log("Bananas are $0.5 a pound");
        break;
    case 'Avocado':
        console.log("Avocados are $expensive");
        break;
    default:
        console.log("last Resort if all conditons fail");

}
// the "if conditon" runs if the "if condition" runs the nested condition.
const password = prompt(" Enter in  A New Password");

if (password.length >= 6) {

    //the indexof runs the positon of the first occurrence of a value
    if (password.indexOf(' ') === -1) {

        console.log("Valid Password");
    }else {
        console.log("Password Can't Have Spaces");
    }

} else {

    console.log("Password is Too Short");
}

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("ME");
}

singSong()
singSong()
singSong()

function greet(firstName) {
// this is where we use multiple functions by using multiple perimeter with first name and last name within the placeholder 
    console.log(`Hey There, ${firstName}`)
}

greet('Ruty');

function greet1(firstName,lastName) {
    console.log(`Hey There, ${firstName} ${lastName[0]}`)
}

greet1('Boomer','Sooner');