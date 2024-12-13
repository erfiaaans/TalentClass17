import './App.css';
import { useState, useEffect } from 'react';
import logo from './assets/img/icon.png';
import keranjang from './assets/img/cart2.png';
import CardItem from './components/CardItem';
import CartItem from './components/CartItem';
function App() {

  // Mengambil data
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

  //handle cart (Tambahkan ke dalam keranjang)
  const [cart, setCart] = useState([]);

  function addToCart(menu) {
    // const existing = cart.find((el) => el.id === menu.id);

    // console.log(existing)
    // if (existing){
    //   return;
    // } else {
    // setCart([...cart, menu]);
    // }
    setCart([...cart, menu])
  }
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
          <div className='d-flex align-items-center'>
            <button
              className="btn d-flex me-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <div className='d-flex me-2' style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src={keranjang}
                  alt='keranjang'
                  className="me-2"
                  style={{ height: '60px' }}
                />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-light"
                >
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>
            </button>
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
        </div>
      </nav>
      {/* End Navbar */}

      {/* Start Menu (Food - Main Course) */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {dataMenu.map((menu, index) => {
            const uniqueId = menu.id || `menu-${index}`;
            return <CardItem
              menu={{ ...menu, id: uniqueId }}
              key={uniqueId}
              index={index}
              addToCart={addToCart}
            />;
          })}
        </div>
      </div>
      {/* End Menu */}

      {/* Start Drawer */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Pesanan Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {cart.map((el, i) => {
            return <CartItem 
              cart={el} 
              key={i} 
            />;
          })}
        </div>
      </div>
      {/* End Drawer */}
    </>
  );
}

export default App;
