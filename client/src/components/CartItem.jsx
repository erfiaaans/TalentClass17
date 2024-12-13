import PropTypes from 'prop-types';
function CartItem({cart}) {
    return(
        <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img
                    src={cart.url_gambar}
                    className="img-fluid rounded-start"
                    alt="menu-poster" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{cart.nama_menu}</h5>
                    <p className="card-text text-harga">
                    Rp. {cart.harga}
                    </p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
    )
}

CartItem.propTypes = {
    cart: PropTypes.shape({
        url_gambar: PropTypes.string.isRequired,
        nama_menu: PropTypes.string.isRequired,
        deskripsi: PropTypes.string,
        harga: PropTypes.number.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default CartItem;