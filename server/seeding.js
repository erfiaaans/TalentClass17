const pool = require("./connection");
const data = require("./menu.json");

let newData = data.map((el) => {
  return `('${el.nama_menu}', ${el.tipe_menu}, '${el.harga}', '${el.deskripsi}', '${el.url_gambar}')`;
});

let newDataToInsert = newData.join(",");

let seedDataQuery = `
  INSERT INTO menu (nama_menu, tipe_menu, harga, deskripsi, url_gambar)
  VALUES ${newDataToInsert}
`;

async function runSeed() {
  try {
    await pool.query(seedDataQuery);
    console.log("Success seed table menu");
  } catch (error) {
    console.log(error);
  }
}

runSeed();
