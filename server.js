const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Noufil's API is alive", status: 200 });
});

app.get("/about", (req, res) => {
  res.json({
    name: "Noufil Naveed",
    role: "Backend Developer",
    skills: ["JavaScript", "Git", "Express"]
  });
});
app.get("/skills", (req, res) => {
  const skills = [
    { name: "JavaScript", level: "learning", weeks: 2 },
    { name: "Git", level: "comfortable", weeks: 2 },
    { name: "Express", level: "just started", weeks: 0 }
  ];
  res.json({ count: skills.length, skills: skills });
});
app.get("/skills/:id", (req, res) => {
  const skills = [
    { name: "JavaScript", level: "learning", weeks: 2 },
    { name: "Git", level: "comfortable", weeks: 2 },
    { name: "Express", level: "just started", weeks: 0 }
  ];

  const id = Number(req.params.id);

  if (id < 0 || id >= skills.length) {
    res.status(404).json({ error: "Skill not found" });
    return;
  }

  res.json(skills[id]);
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});