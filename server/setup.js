const pool = require("./connection");

let createTableMenu = `
    id INT AUTO_INCREMENT PRIMARY KEY, 
    nama_menu VARCHAR(50),
    tipe_menu VARCHAR(50),
    harga double,
    deskripsi TEXT, 
    url_gambar TEXT,   
);
`;

// koneksi ke database => asynchronous

async function runSetup() {
  try {
    await pool.query(createTableMenu);
    console.log("Success setup table menu");
  } catch (error) {
    console.log(error);
  }
}

runSetup();
