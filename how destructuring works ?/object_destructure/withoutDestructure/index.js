const person = { Name: "John" };

// During variable assigning, value are extracted from  key and stored.
const Name = person.Name;
console.log(Name);

// During variable assigning, variable can be named anything without having to do {Name:fname} during destructuring.
const fname = person.Name;
console.log(fname);

// Note: Default value only apply during destructuring.
