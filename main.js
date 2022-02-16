// Dogs mature at a faster rate than human beings.
// We often say a dog’s age can be calculated in “dog years” 
// to account for their growth compared to a human of the same 
// age. In some ways we could say, time moves quickly for dogs 
// — 8 years in a human’s life equates to 45 years in a dog’s 
// life. How old would you be if you were a dog?

// set my age to constant, since I dont want to change it through the script.
const myAge = 27;

// this value is subject to change, and it represents the first 2 years
var earlyYears = 2;

// reassigning the earlyYears variable, into earlyYears for dog years. If i wanted to be more explicit I would save as earlyDogYears
earlyYears *= 10.5;
//earlyYears = earlyYears * 10.5;

// This separates the first two years of my life, which are already accounted for.
var laterYears = myAge - 2;

// I am reassigning my later years to dog years.
laterYears *= 4
//laterYears = laterYears * 4;

// should be 121
// console.log(earlyYears + laterYears);

// Adding together two variables
var myAgeInDogYears = earlyYears + laterYears;

// Setting my name to variable myName and making it lowercase.
var myName = "Micheal".toLocaleLowerCase()

//this console.log uses interpolation to inject my name, age, and dog age into the string.
console.log(`my name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

