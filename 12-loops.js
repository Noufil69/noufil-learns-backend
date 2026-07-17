for (let i = 0; i < 5; i++) {
  console.log(`Iteration: ${i}`);
}
const skills = ["JavaScript", "Git", "Postman", "Node.js"];
for (let i = 0; i < skills.length; i++) {
  console.log(`Skill ${i + 1}: ${skills[i]}`);
}
for (const skill of skills) {
  console.log(`I know ${skill}`);
}
let attempts = 0;
while (attempts < 3) {
  console.log(`Login attempt ${attempts + 1}`);
  attempts++;
}
const users = [
  { id: 1, name: "Noufil", role: "developer" },
  { id: 2, name: "Ahmed", role: "designer" },
  { id: 3, name: "Sara", role: "developer" }
];
for (const user of users) {
  if (user.role === "developer") {
    console.log(`${user.name} is a developer`);
  }
}