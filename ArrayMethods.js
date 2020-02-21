var data;
data = new Array();
data.push('Rajneesh');
data.push('Monika');
data.push('Khushal');
data.push('Sangita');
data.push('Sunita');
data.push('Lumbini');
data.push('Prasanna');
// Explicitely defined callback function
console.log('Explicitely defined callback function');
function printData(v, i) {
    console.log("Value at " + i + " = " + v);
}
data.forEach(printData);
console.log();
console.log('Anonymous function as callback');
data.forEach(function (v, i) {
    console.log("Value at " + i + " = " + v);
});
console.log();
console.log('Arrow function ES6');
data.forEach(function (v, i) {
    console.log("Value at " + i + " = " + v);
});
console.log('------------------------------------------------');
data.map(function (v, i) { return console.log(v); });
console.log();
console.log('-------------------Filter Method-----------------------------');
// Filter -> Used to return unmatched elements from array on a candition, in a new array
var res = data.filter(function (v, i) {
    return v.length > 2;
});
console.log(JSON.stringify(res));
console.log();
console.log('-------------------IndexOf Method-----------------------------');
var index = data.indexOf('Rajneesh');
console.log("String found at Index : " + index);
console.log();
console.log('-------------------Shift Method-----------------------------');
console.log('Shift removes 1st element in an array');
console.log('The array BEFORE removal is ');
console.log(JSON.stringify(data));
console.log('The array AFTER removal is ');
data.shift();
console.log(JSON.stringify(data));
console.log('-------------------UnShift Method-----------------------------');
console.log('Inserts new elements at start of an array');
console.log('The array BEFORE unshift is ');
console.log(JSON.stringify(data));
console.log('The array AFTER unshift is ');
data.unshift('Rajneesh', 'Ketan');
console.log(JSON.stringify(data));
console.log();
console.log('-------------------Splice Method-----------------------------');
console.log('Splice removes elements of array from start index location to NUMBER of elements to delete');
console.log('The array BEFORE splice is ');
console.log(JSON.stringify(data));
console.log('The array AFTER splice() is ');
data.splice(0, 2);
console.log(JSON.stringify(data));
console.log();
console.log('-------------------Slice Method-----------------------------');
console.log('Returns section of an array');
console.log('The array BEFORE slice is ');
console.log(JSON.stringify(data));
console.log('The array AFTER slice() is ');
console.log(data.slice(0, 2));
// console.log(JSON.stringify(data));
