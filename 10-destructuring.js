const person={
    name:"Noufil",
    age:23,
    city:"Karachi",
    university:"Iqra",
};
const personName=person.name;
const personAge=person.age;
console.log(personName, personAge);
const {name, age, city, university}=person;
console.log(name, age, city, university);
const {name:fullName, city:hometown}=person;
console.log(fullName, hometown);
const scores=[85,72,98,69,89];
const [first, second, third, fourth, fifth]=scores;
console.log("Highest:",third);
const[, , fourthscore]=scores;
console.log("Fourth score:",fourthscore);
const request={
    body:{
        username:"Noufil69",
        password:"123456",
        email:"naveednoufil@gmail.com"
    }    
};
const{username, email}=request.body;
console.log("user signed up:", username, email);
