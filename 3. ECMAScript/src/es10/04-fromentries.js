var entries = [
  ["name", "Sime"],
  ["age", 30],
];
console.log("Array original", entries);
// Array origintal [ [ 'name', 'Sime' ], [ 'age', 30 ] ]
console.log("Array transformado a object", Object.fromEntries(entries));
// Array transformado a object { name: 'Sime', age: 30 }
console.log('_______');
var entries = new Map([
  ["name", "alexa"],
  ["age", 24],
]);
console.log(entries);
console.log(Object.fromEntries(entries));
