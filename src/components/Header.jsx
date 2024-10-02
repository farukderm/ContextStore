import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../context/cartContext"; // CartContext'i içe aktar

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext); // cart verisini CartContext'ten al

  // Sepetteki toplam ürün sayısını hesapla
  const totalItems = cart.reduce((acc, product) => acc + product.amount, 0);

  return (
    <div className="navbar bg-dark text-light d-flex justify-content-between align-items-center px-3">
      <Link className="text-decoration-none" to={"/"}>
        <h2 className="text-warning">Context Store</h2>
      </Link>

      <div
        onClick={() => navigate("/cart")}
        className="text-warning position-relative"
        style={{ cursor: "pointer" }} // Pointer cursor ekleyerek kullanıcıya tıklanabilir olduğunu belirt
      >
        <CiShoppingCart className="fs-1" />
        {totalItems > 0 && ( // Eğer sepet boş değilse rozet göster
          <span
            className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle"
            style={{ transform: "translate(-50%, -20%)" }}
          >
            {totalItems}
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
