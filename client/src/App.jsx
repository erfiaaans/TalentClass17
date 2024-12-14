import "./App.css";
import { useState, useEffect } from "react";
import logo from "./assets/img/icon.png";
import keranjang from "./assets/img/cart2.png";
import CardItem from "./components/CardItem";
import CartItem from "./components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import header from "./assets/img/header3.png";

function App() {
  const [dataMenu, setDataMenu] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Home");

  const uniqueTipeMenu = [
    "Home",
    ...new Set(dataMenu.map((menu) => menu.tipe_menu)),
  ];

  // Mengambil data
  async function getData() {
    const url = "https://billowy-poised-pentagon.glitch.me/menu";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setDataMenu(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const filteredMenu = dataMenu.filter((menu) => {
    const matchesSearch = menu.nama_menu
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === "Home" || menu.tipe_menu === activeTab;

    return matchesSearch && matchesTab;
  });

  // Handle cart 
  const [cart, setCart] = useState([]);

  function addToCart(menu) {
    const updatedMenu = {
      ...menu,
      created_at: new Date().toISOString(),
    };
    setCart([...cart, updatedMenu]);
  }

  const handleShowToast = (message) => {
    toast.success(message, {
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <>
      {/* Start Navbar */}
      <nav className="navbar bg-custom sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="d-flex align-items-center">
              <img
                src={logo}
                alt="Logo"
                className="me-2"
                style={{ height: "40px" }}
              />
              <span className="fw-bold text-white">Flowfy</span>
            </span>
          </a>
          <div className="d-flex align-items-center">
            <button
              className="btn d-flex me-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <div
                className="d-flex me-2"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={keranjang}
                  alt="keranjang"
                  className="me-2"
                  style={{ height: "60px" }}
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-light">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>
            </button>
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>
      {/* End Navbar */}

      {/* Header */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Hi, Pelanggan No. Meja 17!</h5>
        </div>
        <img src={header} className="card-img-bottom" alt="new-menu" />
      </div>
      {/* Header */}

      {/* Start Menu */}
      <div className="container py-5">
        <ul
          className="nav nav-pills nav-fill gap-2 p-1 small bg-nav-pills rounded-5 shadow-sm mb-4"
          id="pillNav2"
          role="tablist"
          style={{
            "--bs-nav-link-color": "var(--bs-white)",
            "--bs-nav-pills-link-active-color": "var(--bs-primary)",
            "--bs-nav-pills-link-active-bg": "var(--bs-white)",
          }}
        >
          {uniqueTipeMenu.map((tipe, index) => (
            <li className="nav-item" role="presentation" key={index}>
              <button
                className={`nav-link rounded-5 ${activeTab === tipe ? "active" : ""
                  }`}
                id={`${tipe}-tab`}
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected={activeTab === tipe}
                onClick={() => handleTabChange(tipe)}
              >
                {tipe}
              </button>
            </li>
          ))}
        </ul>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredMenu.map((menu, index) => {
            const uniqueId = menu.id || `menu-${index}`;
            return (
              <CardItem
                menu={{ ...menu, id: uniqueId }}
                key={uniqueId}
                index={index}
                addToCart={addToCart}
                handleShowToast={handleShowToast}
              />
            );
          })}
        </div>
      </div>
      {/* End Menu */}

      {/* Start Cart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Pesanan Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.map((el, i) => {
            return (
              <CartItem
                cart={el}
                key={i}
                index={i}
                handleShowToast={handleShowToast}
              />
            );
          })}
        </div>
        <div className="modal-footer p-3 m-2">
          <button 
            type="button"
            className="btn bg-custom text-white"
          >
          Pembayaran
          </button>
        </div>
      </div>
      {/* End Cart */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Footer */}
      <footer className="bg-body-tertiary text-center text-lg-start text-light">
        <div className="text-center p-3 bg-custom">
          © 2024 Erfia Nadia Safari
        </div>
      </footer>
      {/* Footer */}
    </>
  );
}

export default App;
