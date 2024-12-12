import './App.css';
import { useState, useEffect } from 'react';
import logo from './assets/img/logo.png';
function App() {

  const [dataMenu, setDataMenu] = useState([]);
  async function getData() {
    const url = "http://localhost:3000/menu";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      setDataMenu(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>

      {/* Start Navbar */}
      <nav className="navbar bg-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="d-flex align-items-center">
              <img src={logo} alt="Logo" className="me-2" style={{ height: '40px' }} />
              <span className="fw-bold text-white">Flowfy</span>
            </span>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* End Navbar */}

      {/* Start Menu (Food - Main Course) */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {dataMenu.map((menu, index) => {
            return (
              <div key={index} className="col">
                <div className="card h-100">
                  <img
                    src={menu.url_gambar}
                    className="card-img-top"
                    alt="image poster"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{menu.nama_menu}</h5>
                    <p className="card-text">{menu.deskripsi}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <small
                      className="text-harga">
                      Rp. {menu.harga}
                    </small>
                    <div>
                      <input className="btn btn-danger" type="submit" value="Beli"/>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
