//Note:person= object, {Name:"John"} = object literal, Name = key/ property and "John" = value.
const person = { Name: "John" }; 

// During destructuring, value are extracted from existing key and stored as variable wit same name.
const { Name } = person;

console.log(Name);

// During destructuring, you can change assign the value to different variable as well.
const { Name: pName } = person;
console.log(pName);

// During destructuring, you can assign a value to props as default.
const {Name:fName, age=30}= person;
console.log(fName)
console.log(age)
console.log(person)