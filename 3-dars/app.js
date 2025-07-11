alert('Hello World')

const yosh = confirm('sen 18 yoshdan oshgansanmi')


console.log(yosh);

const ism = prompt('Isming nima','')

console.log(ism);

const yoz = +prompt('Yoshingni yoz')

console.log(yoz);



//Interplatsiya

//camelCase bu constalar
const firstNmae = 'Nurbek'

const lastName = 'nurb_ek153'

let age = 17


// console.log('My name is ' + firstNmae  + lastName  + 'Im' + '' +age  +' years old');


console.log(`My name is ${firstNmae}  ${lastName} , I'm ${age} years old.`);

//Operatorlar

let x = 48
let y = 12

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x%y);


//Increment har doim sonni bittaga oshiradi
//Decrement esa har doim sonni bittaga kamaytiradi


let a = 729
let b = 27

//Pastfix

a++
b--


//Prefix

++a
--b


console.log(a);
console.log(b);


// && va ni anglatadi 
// || yokidani anglatadi

// bularni farqi && va qachon ki hammas true bulsa || yokida esa qachonki bitta true bulsa ture qaytaradi


let isMaried = false
let isHaveChild = true

const deed = isMaried || isHaveChild

console.log(deed);