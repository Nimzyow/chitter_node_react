const express = require("express");
const cors = require("cors");
const Sequelize = require("./db");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser());

app.get("/", (req, res) => {
  res.json({ msg: "hello world!" });
});

app.get("/peep", async (req, res) => {
  try {
    const [results, metadata] = await Sequelize.query(`SELECT * FROM peeps;`);
    res.json({ msg: results });
  } catch (error) {
    console.error(error);
  }
});

app.post("/peep", async (req, res) => {
  try {
    await Sequelize.query(
      `INSERT INTO peeps (peep, date, time, user_id) VALUES ('${req.body.peep}', '${req.body.date}', '${req.body.time}', '${req.body.user_id}');`
    );
    res.json({
      msg: `peep made with user_id: ${req.body.user_id} with peep: ${req.body.peep}`
    });
  } catch (error) {
    console.error(error);
  }
});

app.post("/register", async (req, res) => {
  try {
    await Sequelize.query(
      `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}');`
    );
    res.json({
      msg: `Registered ${req.body.name} to the database`
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
