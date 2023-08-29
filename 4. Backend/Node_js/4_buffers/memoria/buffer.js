// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1,2,3,4]);
let buffer = Buffer.from('HOOOOLAAA');

abc = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    abc[i]=i+97;    
}
console.log(abc);
console.log(abc.toString());
console.log(buffer.toString());
