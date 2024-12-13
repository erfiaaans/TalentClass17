const express = require("express");
const pool = require("./connection");
const cors = require('cors');

const app = express();

const port = 3000;

app.use(cors());

// Home route
app.get("/", (request, response) => {
  response.send("Aplikasi Menu Flowfy");
});

// Menampilkan semua menu
app.get("/menu", async (request, response) => {
  try {
    const result = await pool.query(`SELECT * FROM menu`);
    const dataMenu = result.rows;  

    response.json(dataMenu);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

// Menampilkan menu berdasarkan ID
app.get("/menu/:id", async (request, response) => {
  try {
    const { id } = request.params;  
    const result = await pool.query(
      `SELECT * FROM menu WHERE id = $1`, [id] 
    );

    const dataMenu = result.rows; 
    if (dataMenu.length === 0) {
      return response.status(404).json({ message: "Data Not Found" });
    } else {
      response.json(dataMenu[0]);
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
