import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function CardItem({ menu, index, addToCart, handleShowToast }) {
    const modalRef = useRef(null);
    const triggerButtonRef = useRef(null);

    useEffect(() => {
        const modal = modalRef.current;
        const triggerButton = triggerButtonRef.current;

        if (modal) {
            const handleModalShown = () => {
                modal.removeAttribute('aria-hidden');
            };

            const handleModalHidden = () => {
                modal.setAttribute('aria-hidden', 'true');
                if (triggerButton) {
                    triggerButton.focus();
                }
            };

            modal.addEventListener('shown.bs.modal', handleModalShown);
            modal.addEventListener('hidden.bs.modal', handleModalHidden);

            return () => {
                modal.removeEventListener('shown.bs.modal', handleModalShown);
                modal.removeEventListener('hidden.bs.modal', handleModalHidden);
            };
        }
    }, []);

    return (
        <>
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
                        <small className="text-harga">
                            Rp. {menu.harga}
                        </small>
                        <div>
                            <a
                                href="#"
                                ref={triggerButtonRef}
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target={"#modal" + menu.id}
                            >
                                Beli
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={modalRef}
                className="modal fade"
                id={"modal" + menu.id}
                tabIndex="-1"
                aria-labelledby={`modalLabel${menu.id}`}
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`modalLabel${menu.id}`}>
                                {menu.nama_menu}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <img
                                src={menu.url_gambar}
                                className="card-img-top"
                                alt="image poster"
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <p className="text-harga">Harga: Rp. {menu.harga}</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    addToCart(menu);
                                    handleShowToast(`Berhasil menambahkan ${menu.nama_menu} ke keranjang!`);
                                }}
                                type="button"
                                className="btn btn-success"
                            >
                                Tambahkan ke dalam keranjang
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

CardItem.propTypes = {
    menu: PropTypes.shape({
        url_gambar: PropTypes.string.isRequired,
        nama_menu: PropTypes.string.isRequired,
        deskripsi: PropTypes.string,
        harga: PropTypes.number.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
    index: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
    handleShowToast: PropTypes.func.isRequired,
};

export default CardItem;
