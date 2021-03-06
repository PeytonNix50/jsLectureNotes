/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an Else/If conditional that:
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by both 3 and 5
    Convert this to a Switch Statement and then a Ternary
*/

let FB = 30;

if (FB % 3 == 0 && FB % 5 !== 0) {
    console.log('Fizz');
} else if (FB % 5 == 0 && FB % 3 !== 0) {
    console.log('Buzz');
} else if (FB % 3 == 0 && FB % 5 == 0) {
    console.log('Fizz Buzz');
} else {
    console.log(neither);
}

//Above works but probably easier written like below because JS reads from top to bottom

if (FB % 3 == 0 && FB % 5 == 0) {
    console.log('Fizz Buzz')
} else if (FB % 3 == 0) {
    console.log('Fizz');
} else if (FB % 5 == 0) {
    console.log('Buzz');
} else {
    console.log('neither');
}

//Switch

let FB = 30;

switch(true) {
    case(FB % 3 == 0 && FB % 5 == 0):
        console.log('Fizz Buzz');
        break;
    case(FB % 3 == 0):
        console.log('Fizz');
        break;
    case(FB % 5 == 0):
        console.log('Buzz');
        break;
    default:
        console.log('neither');
}

//Ternary

let FB = 15;

(FB % 3 == 0 && FB % 5 == 0) ? console.log('Fizz Buzz') : (FB % 3 == 0) ? console.log('Fizz') : (FB % 5 == 0) ? console.log('Buzz') : console.log('neither');
//or format to where it's easier to read like below
(FB % 3 == 0 && FB % 5 == 0) ? console.log('Fizz Buzz') 
: (FB % 3 == 0) ? console.log('Fizz') 
: (FB % 5 == 0) ? console.log('Buzz') 
: console.log('neither');




/*
************
 FOR LOOPS
************
    - Loops offer us a quick and easy way to do something repeadetly
*/


/* BRONZE
    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.
*/

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i]);
}

/* SILVER
    - Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.
*/

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let i='string';
console.log(i);

for(i = 0; i < alphabet.length; i++){
    if (i % 2 == 0){
        console.log(alphabet[i]);
    } else {
        console.log('the index is an odd number');
    }
}
console.log(letter);

/* GOLD
    - Declare a variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation - console.log 'the index ___ is an odd number'.
    - Use Google to search for an array method that allows you to add one or more elements to an array
*/

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let arr = [];
for(i = 0; i < alphabet.length; i++) {
    if (i % 2 == 0){
        arr.push(alphabet[i]);
        console.log(arr);
    } else {
        console.log(`the index ${i} is an odd number`)
    }
}

/* PLATINUM
    - Convert the conditional into a ternary
*/

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = [];

for (let i = 0; i < alphabet.length; i++){
    (i % 2 == 0) ? (arr.push(alphabet[i]), console.log(arr)) : console.log(`the index ${i} is an odd number`)
}

/*
************
 FOR OF LOOPS
************
    - For Of Loops parse through an iterable list of numbers - so that makes them great for working with arrays
    - Arrays contain what are known as iterable properties. Each property - or value - in an array, each contains it's own index (the first item in an array has an index of 0, and so on). 
                     value
        let arr = ['chicken', 'turkey', 'duck']
                       0         1        2
                     index
*/

/* BRONZE
    - Using a for of loop, console.log the name of each pie from the pies array using string interpolation.
*/
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']

for (const type of pies){
    console.log(`${type} pie`);
}

/* SILVER
    - Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
    - Use google to search for an array method that checks if an array includes a certain value
*/
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']

for (const type of pies){
    if (type.includes('blueberry')){
        console.log(`the ${type} pie is a fruit pie`)
    } else {
        console.log(`the ${type} pie is not a fruit pie :(`)
    }
}

/* GOLD
    - Have the conditional check if EACH pie from the pies array is of the type 'fruit pie'.
*/
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']

for (const type of pies){
    if (type.includes('apple') || type.includes('blueberry') || type.includes('peach') || type.includes('cherry')){
        console.log(`the ${type} pie is a fruit pie`)
    } else {
        console.log(`the ${type} pie is not a fruit pie :(`)
    }
}

/*
************
 FOR IN LOOPS
************
    - For In Loops count the enumerable properties in an object.
    - Objects contain what are known as enumerable properties - which just means countable. So although properties in an object don't contain an index like arrays, their properties can be simply counted. 
    - a key - so think a key in an object - goes IN to a lock for it to correctly work and unlock. So for in loops are best used with objects, and that means for of loops are best used with arrays
*/

let obj = {
    key1: 'value',
    key2: 'value',
    key3: 'value'
}

console.log(Object.keys(obj).length);



/* BRONZE
    - Using a for in loop, console.log the name of each character from the members key in the fellowshipOfTheRing object.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

//dot notation
console.log(fellowshipOfTheRing.members.Gandalf) //staff
//object bracket notation / property accessors
console.log(fellowshipOfTheRing['members']['Gandalf']);

for (let character in fellowshipOfTheRing.members){
    console.log(character);
}

/* SILVER
    - Add a conditional to the for in loop that checks if the characters name does not begin with a vowel. Then, using string interpolation, console.log either '__'s name does not begin with a vowel' or '__'s name does begin with a vowel'.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

for (let character in fellowshipOfTheRing['members']) {
    if (character[0] !== 'A' && character[0] !== 'E' && character[0] !== 'I' && character[0] !== 'O' && character[0] !== 'U') {
        console.log(`${character}'s name does not begin with a vowel`);
    } else {
        console.log(`${character}'s name does begin with a vowel`);
    }
}

/* GOLD
    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}
let arr = [];

for (let character in fellowshipOfTheRing.members) {
    if (character[0] !== 'A' && character[0] !== 'E' && character[0] !== 'I' && character[0] !== 'O' && character[0] !== 'U') {
        arr.push(character);
        console.log(arr);
    } else {
        console.log(`${character}'s name does begin with a vowel`);
    }
}