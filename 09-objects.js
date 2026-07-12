const person={
    name:"Noufil",
    age:23,
    city:"Karachi",
    isstudent:true,
    skills:["nothing"]
};
console.log(person.name);
console.log(person["city"]);
person.country="Pakistan";
console.log(person);
const apiresponse={
    status:200,
    message:"Success",
    data:{
        user:{
            id:1,
        name:"Noufil",
        email:"naveednoufil@gmail.com"
        }
    }
};
console.log(apiresponse.data.user.name);
console.log(apiresponse.status);
