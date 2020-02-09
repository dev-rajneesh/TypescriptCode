let fname: string = "Rajneesh";
let mname: string = "Khushal";
let lname: string = "Barapatre";

console.log('Traditional Concatanation ' + fname + ' ' + mname +' '+ lname);
console.log('ES6 String concatenation using Template String');
let fullname = `${fname} ${mname} ${lname}`;
console.log(fullname);
console.log('Upper case: ', fullname.toUpperCase());
console.log('Lower case: ', fullname.toLowerCase());
console.log('Length ', fullname.length);
