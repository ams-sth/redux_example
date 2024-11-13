//How to use Map ?

const person = [
  { fname: "Manish", contact: 9840190442 },
  { fname: "Amsh,", contact: 9840190442 },
];
const array = person.map(({ fname, contact }) =>
  console.log({ fname }, { contact })
);

//Note: person is array  current elements such as "John", 30, "Kathmandu"
//Note: index is second parameter that indicates current position of element
//Note: p is first parameter that is also placeholder for c
