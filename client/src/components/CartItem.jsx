import PropTypes from 'prop-types';

function CartItem({ cart }) {

    const timeAgo = new Date(cart.created_at).toLocaleString();

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center p-3">
                    <div className='ratio ratio-4x3 w-100'>
                        <img
                            src={cart.url_gambar}
                            className="img-fluid rounded-start"
                            alt="menu-poster"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{cart.nama_menu}</h5>
                        <p className="card-text text-harga">
                            Rp. {cart.harga}
                        </p>
                        <p className="card-text">
                            <small className="text-body-secondary">{timeAgo}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    cart: PropTypes.shape({
        url_gambar: PropTypes.string.isRequired,
        nama_menu: PropTypes.string.isRequired,
        deskripsi: PropTypes.string,
        harga: PropTypes.number.isRequired,
        created_at: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
};

export default CartItem;
