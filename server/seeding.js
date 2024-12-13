const pool = require("./connection");
const data = require("./menu.json");

let newData = data.map((el) => {
  return [
    el.nama_menu, 
    el.tipe_menu, 
    el.harga, 
    el.deskripsi, 
    el.url_gambar
  ];
});

let seedDataQuery = `
  INSERT INTO menu (nama_menu, tipe_menu, harga, deskripsi, url_gambar)
  VALUES ($1, $2, $3, $4, $5)
`;

async function runSeed() {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN'); 
    for (const el of newData) {
      await client.query(seedDataQuery, el); 
    }
    await client.query('COMMIT'); 
    console.log("Success seed table menu");
  } catch (error) {
    await client.query('ROLLBACK'); 
    console.error("Error seeding data: ", error);
  } finally {
    client.release();
  }
}

runSeed();
