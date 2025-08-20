const fs = require("fs");
const path = require("path");
const db = require("./db");

const schema = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf8");
db.exec(schema);

// insert sample infographic
const sample = {
  title: "Global Internet Adoption",
  description: "Users over time and regional breakdown",
  data: JSON.stringify({
    line: [
      { year: 2000, users: 361 },
      { year: 2005, users: 1018 },
      { year: 2010, users: 2024 },
      { year: 2015, users: 3190 },
      { year: 2020, users: 4660 }
    ],
    pie: [
      { name: "Asia", value: 2600 },
      { name: "Europe", value: 728 },
      { name: "Americas", value: 653 },
      { name: "Africa", value: 522 },
      { name: "Oceania", value: 157 }
    ]
  })
};

db.prepare(`INSERT INTO infographics (title, description, data)
            VALUES (@title, @description, @data)`).run(sample);

console.log("Database seeded ✅");
