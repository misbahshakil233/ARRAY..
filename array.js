//what is array?
//Array is a special value which can be able to hold more than one values 

//why we use array ?
// if you have a list of items and you want to store a single varaiable so we use array .

//Array withou pushMethod..
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// cars[4]="Alto"  //3 empty
// console.log(cars)

//Acess array by index
var names1=["misbah","shakil","sara"]
// let name=names1[1]
// console.log(`Acess an array:  ${name}`)

//Changing an array
// names1[2]="bilal"
// console.log(`changing an array : ${names1}`)

//acessing last elements:

// let lastelement=names1[names1.length-1];
// console.log(`Last Elements:${lastelement}`)

//delete Aray
delete names1[1]
console.log("deleta ==>" + names1)

//********ITERATION**********
let arr=[1,2,3,4,5,6,7]
for(let i =0 ;i<arr.length;i++){
    console.log(`for loop ${arr[i]}`)
}

// Adding pusing poping SPlice and SLice

//SPLICE
// splice add bh krta hai aur reve bhi karta ha phla element add krta h dusra remove
//The splice() method returns an array with the deleted items:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,1,"gava")   //index 2 p gava add hojyerga aur banana dlt[banana orange gava apple]
// console.log(fruits)
// jb hum koi values add kryengay phr dlt ka paraeter dyngay tw wo remove add k bd ki values ko karyga

// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.splice(0, 1))
//  console.log(fruits1.sort() + " ====>Sorting alphabatically" )

 //********SLICE*******
 //The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);

//******POP********** */UNSHIFT
//The pop() method removes the last element from an array:
//The pop() method removes the last element from an array:
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
//   console.log(fruits1.pop() + " ....") ;

//The pop() method returns the value that was "popped out":

//****************PUSH ***********SIMILAR SHIFT 
//The push() method adds a new element to an array (at the end):
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
//The push() method returns the new array length:

//***********SHIFT */

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
///The shift() method returns the value that was "shifted out":


//***********UNSHIFT */
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// Example
// const fruitsS = ["Banana", "Orange", "Apple", "Mango"];
// fruitsS.unshift("Lemon");

//*************SPREAD*************MERGE KRDYNA
var parents=["ammi" ," papa"]
let childers=["sister","brother"]
var family=[...parents,...childers]
console.log(family)
//spread means aik variable ma 2,3 cheezo ka daaldyna

//*******************IMPORTANT
//agar humh kisi website s koi array cahiya wo array m cinvert na ho 
console.log(Array.isArray("misbah"))
console.log(Array.from("misbah"))