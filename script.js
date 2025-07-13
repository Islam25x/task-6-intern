// 1 / 2(primitive)
var name = "Islam";           // string (primitive)
let age = 21;                      // number (primitive)
const isStudent = true;           // boolean (primitive)
// 2 (non primitive)
let skills = ["HTML", "CSS", "JavaScript"]; // array (reference)
const address = {                 // object (reference)
  city: "Cairo",
  country: "Egypt"
};
// 3
const userInfo = { 
  name: name,
  age: age,
  isStudent: isStudent,
  skills: skills,
  address: address
};
// 4
console.log(userInfo);
