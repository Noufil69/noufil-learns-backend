const express = require("express");
const app = express();

// Built-in middleware
app.use(express.json());

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

app.use(logger);

// Counter middleware
let requestCount = 0;

const counter = (req, res, next) => {
  requestCount++;
  console.log(`Total requests so far: ${requestCount}`);
  next();
};

app.use(counter);

// Auth middleware - only used on specific routes
const authGuard = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey !== "noufil-secret-123") {
    return res.status(401).json({ error: "Unauthorized - invalid API key" });
  }

  next();
};

// Database (fake for now)
let skills = [
  { id: 1, name: "JavaScript", level: "learning" },
  { id: 2, name: "Git", level: "comfortable" },
  { id: 3, name: "Express", level: "just started" }
];

// GET all skills - public
app.get("/api/skills", (req, res) => {
  res.json({ count: skills.length, data: skills });
});

// GET one skill - public
app.get("/api/skills/:id", (req, res) => {
  const id = Number(req.params.id);
  const skill = skills.find(s => s.id === id);

  if (!skill) {
    return res.status(404).json({ error: `Skill with id ${id} not found` });
  }

  res.json(skill);
});

// POST new skill - protected
app.post("/api/skills", authGuard, (req, res) => {
  const { name, level } = req.body;

  if (!name || !level) {
    return res.status(400).json({ error: "name and level are required" });
  }

  const newSkill = {
    id: skills.length + 1,
    name: name,
    level: level
  };

  skills.push(newSkill);
  res.status(201).json(newSkill);
});

// PUT update skill - protected
app.put("/api/skills/:id", authGuard, (req, res) => {
  const id = Number(req.params.id);
  const skill = skills.find(s => s.id === id);

  if (!skill) {
    return res.status(404).json({ error: `Skill with id ${id} not found` });
  }

  const { name, level } = req.body;
  if (name) skill.name = name;
  if (level) skill.level = level;

  res.json(skill);
});

// DELETE skill - protected
app.delete("/api/skills/:id", authGuard, (req, res) => {
  const id = Number(req.params.id);
  const index = skills.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Skill with id ${id} not found` });
  }

  skills.splice(index, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});