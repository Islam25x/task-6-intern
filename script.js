// 1 
const user = {
    username: "Islam",
    age: 21,
    address: {
        city: "Cairo",
        country: "Egypt",
    }
};

const { username, address: { city, country } } = user;
console.log('first part', username);
console.log('first part', city);
console.log('first part', country);

console.log('....................................');
// 2
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log('second part', sumAll(1, 2, 3, 4));

console.log('....................................');
// 3
const user2 = {
    firstName: "Islam2",
    age: 22,
    skills: ['html', 'css', 'js']
};
const { firstName, ...rest } = user2
console.log('third part', firstName);
console.log('third part', rest);

const user3 = {
    ...user2,
    lastName: 'Salah'
}

console.log('third part ' , user3);

console.log('....................................');

// 4

const name = "Islam";
const Age = 21;
const sentence = `My name is ${name} iam ${Age}.`;

console.log('last part ' , sentence);