// Define an array
var names = []; // Implicit array of any, equivalent to Array<any>
names.push("Rajneesh");
names.push("Monika");
names.push("Khushal");
names.push("Sangita");
// Traditional Iteration
console.log('------------------Using For loop----------------------');
for (var i = 0; i < names.length; i++) {
    console.log("Name at " + i + "th index is = " + names[i]);
}
console.log();
console.log('------------------Using For...In loop----------------------');
for (var i in names) {
    console.log("Name at " + i + "th index is = " + names[i]);
}
console.log();
console.log('------------------Using For...Of loop----------------------');
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log("Name = " + n);
}
console.log();
