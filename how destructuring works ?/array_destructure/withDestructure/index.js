const person = ["John", 30, { address: "Kathmmandu" }];

// During destructuring, value are extracted from existing key and stored as variable wit same name.
//Also you can skip an element
const [first, , third] = person;
//Note: if you just put , after first but not before third, third is seen as second element
//and will print 30 instead of "Kathmandy"
const [, , {address}] = person;
console.log(first);
console.log(third);
console.log(address)
