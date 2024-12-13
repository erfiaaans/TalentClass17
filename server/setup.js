const pool = require("./connection");

let createTableMenu = `
    CREATE TABLE IF NOT EXISTS menu (
        id SERIAL PRIMARY KEY, 
        nama_menu VARCHAR(50),
        tipe_menu VARCHAR(50),
        harga DOUBLE PRECISION,
        deskripsi TEXT, 
        url_gambar TEXT
    )
`;

async function runSetup() {
  try {
    await pool.query(createTableMenu);
    console.log("Success setup table menu");
  } catch (error) {
    console.log(error);
  }
}

runSetup();
