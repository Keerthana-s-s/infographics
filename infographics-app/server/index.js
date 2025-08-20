const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// get all infographics
app.get("/api/infographics", (req, res) => {
  const rows = db.prepare("SELECT * FROM infographics").all();
  res.json(rows.map(r => ({
    id: r.id,
    title: r.title,
    description: r.description,
    data: JSON.parse(r.data)
  })));
});

// get single infographic
app.get("/api/infographics/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM infographics WHERE id = ?").get(req.params.id);
  if (!row) return res.status(404).json({ error: "Not found" });
  res.json({
    id: row.id,
    title: row.title,
    description: row.description,
    data: JSON.parse(row.data)
  });
});

app.listen(4000, () => console.log("✅ API running at http://localhost:4000"));
