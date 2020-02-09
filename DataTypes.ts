// Explicit type declaration
console.log("------------Explicit type declaration------------------------")
let n1:number = 100;


// Implicit type declaration based on initial value
console.log("------------Implicit type declaration based on initial value------------------------")
let n2 = 1000;
console.log(typeof(n1) + ' ' + typeof(n2));

console.log("------------Use of let variable. Diff types into same variable------------------------")
let v1:string = "dddd";
let v2 = "ddd";

let a1:any;
a1 = 100;
console.log(a1 + " " + typeof(a1));

a1 = "ddd";
console.log(a1 + " " + typeof(a1));

a1 = true;
console.log(a1 + " " + typeof(a1));

a1 = {}; // Object
console.log(a1 + " " + typeof(a1));

a1 = [1,2,3];
console.log(a1 + " " + typeof(a1));

a1 = new Date(2020, 1, 09);
console.log(a1 + " " + typeof(a1));
//-----------------------------------------------------------------------
// Union Types
console.log("------------Union Types------------------------")
let b1:number|string;
b1 = 100;
console.log(a1 + "" + typeof(b1));

b1 = "fdasfasd";
console.log(a1 + "" + typeof(b1));
//-----------------------------------------------------------------------
// Equality Operators
console.log("------------Equality Operators------------------------")
let r1 = 1 == "1"; // Value Equality
console.log(r1);

let r2 = 1 === "1"; // deep equality (value + type)
console.group(r2);

console.log("------------Parsing------------------------")
console.log(parseInt("333333ooooodd")); // --> 33
console.log(parseFloat("333.785fhskdljh sdfds"));// --> 333.785
console.log();
console.log();
console.log();

let a2 = {x:10};
console.log('Value a2.x = ', + a2.x);

let a3 = a2;// assigning a2 to a3
console.log('assigning a2 to a3. Now a2 & a3 point to the same object');
console.log('Value of a3.x = ', + a3.x);

a3.x = 300;
console.log('After update of a3.x then value of a3.x = ', + a3.x);
console.log('After update of a3.x then value of a2.x = ', + a2.x);

// Create a new blank clone of a2 with value of x, and a3 will point ot the new object
console.log("Create a new blank clone of a2 with value of x, and a3 will point ot the new object");
let a4 = Object.assign({}, a2);
console.log("Value of a4.x = ", + a4.x);
a4.x=900;

console.log("After update of a4.x then value of a4.x = ", a4.x);
console.log("After update of a4.x then value of a2.x = ", a2.x);
