import './App.css'
import logo from './assets/img/logo.png';
function App() {

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
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\food\braised-meat.jpg" className="card-img-top" alt="Braised Meat" />
              <div className="card-body">
                <h5 className="card-title">Braised Meat</h5>
                <p className="card-text">Sup dengan rebusan daging sapi, kentang dan wortel.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\food\minty-meat-rolls.jpg" className="card-img-top" alt="Minty Meat Rolls" />
              <div className="card-body">
                <h5 className="card-title">Minty Meat Rolls</h5>
                <p className="card-text">Daun Mint yang digulung dengan daging sapi dengan saus asam manis</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\food\Qingce-Stir-Fry-fix.PNG" className="card-img-top" alt="Qingce Stir Fry" />
              <div className="card-body">
                <h5 className="card-title">Qingce Stir Fry</h5>
                <p className="card-text">Jamur, Lotus Head, cabai dan kubis dengan rasa pedas dan renyah</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Menu (Food -Main Course) */}

      {/* Start Menu (Food - Dessert) */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\food\Lighter-than-air Pancake.jpg" className="card-img-top" alt="Lighter-than-air Pancake" />
              <div className="card-body">
                <h5 className="card-title">Lighter-than-air Pancake</h5>
                <p className="card-text">Pancake dengan topping whipped cream, stroberi dan coklat</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\food\Cloud-Shrouded Jade.webp" className="card-img-top" alt="Cloud-Shrouded Jade" />
              <div className="card-body">
                <h5 className="card-title">Cloud-Shrouded Jade</h5>
                <p className="card-text">Puding telur, tangyuan dan pasta lotus</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\food\padisarah-pudding-edit.webp" className="card-img-top" alt="Padisarah Pudding" />
              <div className="card-body">
                <h5 className="card-title">Padisarah Pudding</h5>
                <p className="card-text">Pudding dengan campuran coconut milk dan ubi jalar</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Menu (Food - Dessert) */}

      {/* Start Menu (Food - Snack) */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\food\fish-and-chips.jpg" className="card-img-top" alt="Fish and Chips" />
              <div className="card-body">
                <h5 className="card-title">Fish and Chips</h5>
                <p className="card-text">Ikan fillet dan kentang goreng dengan saus tartar</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\food\crystal-shrimp-dumpling2.jpg" className="card-img-top" alt="Crystal Shrimp Dumpling" style={{ height: '220px'}}/>
              <div className="card-body">
                <h5 className="card-title">Crystal Shrimp Dumpling</h5>
                <p className="card-text">Pangsit dengan isian terasi udang</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\food\samosa.jpg" className="card-img-top" alt="Samosa"  style={{ height: '220px'}}/>
              <div className="card-body">
                <h5 className="card-title">Samosa</h5>
                <p className="card-text">Pastri goreng berisi kentang rebus, kacang kapri, bawang bombay, daun ketumbar, panir dan daging</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Menu (Food - Snack) */}

      {/* Start Menu (Beverage - Coffee) */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\beverage\caramel-machiato.webp" className="card-img-top" alt="Caramel Macchiato" style={{ height: '230px', weight: 'auto'}}/>
              <div className="card-body">
                <h5 className="card-title">Caramel Macchiato</h5>
                <p className="card-text">Coffee dengan saus karamel dan extra whipped cream</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\beverage\Tiramisu-Frappuchino.webp" className="card-img-top" alt="Tiramisu Frappuccino" style={{ height: '230px', weight: 'auto'}}/>
              <div className="card-body">
                <h5 className="card-title">Tiramisu Frappuccino</h5>
                <p className="card-text">Coffee dengan extra whipped cream dan Cocoa Powder</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="src\assets\img\beverage\Lemonade-Americano.jpg" className="card-img-top" alt="Lemonade Americano" />
              <div className="card-body">
                <h5 className="card-title">Lemonade Americano</h5>
                <p className="card-text">Coffee dengan perasan air lemon</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Menu (Beverage - Coffee) */}
    </>
  )
}

export default App;
