// Define an array
let names = []; // Implicit array of any, equivalent to Array<any>
names.push("Rajneesh");
names.push("Monika");
names.push("Khushal");
names.push("Sangita");

// Traditional Iteration
console.log('------------------Using For loop----------------------')
for(let i = 0; i < names.length ; i++)
{
    console.log(`Name at ${i}th index is = ${names[i]}`);
}
console.log();
console.log('------------------Using For...In loop----------------------')
for(let i in names)
{
    console.log(`Name at ${i}th index is = ${names[i]}`);
}
console.log();
console.log('------------------Using For...Of loop----------------------')
for(let n of names)
{
    console.log(`Name = ${n}`);    
}
console.log();