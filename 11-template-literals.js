const name = "Noufil";
const age = 23;
const city = "Karachi";
const message = `my name is ${name} and i am ${age} years old and i live in ${city}`;
console.log(`next year i will be ${age+1}`);
console.log(`My name in caps :${name.toUpperCase()}`);
const apiError = `
Error: user not found
Status:404
Message: this user does not exist
Timestamp:${new Date().toISOString()}`;
console.log(apiError);
