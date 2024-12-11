const express = require("express");
const pool = require("./connection");

const app = express();

const port = 3000;

app.get("/", (request, response) => {
  response.send("Data masih belom diinput ke database wkwk");
});

app.get("/menu", async (request, response) => {
  try {
    const [dataMenu] = await pool.query(`SELECT * FROM menu`);
    response.json(dataMenu);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal Server Error" });
    //     const data = await mysql.query(`SELECT * FROM menu`);

    //     let dataMenu = data.rows;

    //     response.json(dataMenu);
    // } catch (error) {
    //     console.log(error);
    //     response.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/menu/:id", async (request, response) => {
  //titik 2 agar lebih dinamis
  try {
    const [dataMenu] = await pool.query(
      `SELECT * FROM menu WHERE id = ${request.params.id}`
    );

    if (dataMenu.length === 0) {
      response.status(404).json({ message: "Data Not Found" });
    } else {
      response.json(dataMenu);
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
