import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../context/cartContext";
const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="card card-body py-2">
      <div className="d-flex justify-conten-end pe-2">
        {product.availabilityStatus === "Low Stock" ? (
          <p className="badge bg-danger">Sınırlı Stok</p>
        ) : (
          <p>_</p>
        )}
      </div>
      <div>
        <img
          className="object-fit-contain"
          src={product.thumbnail}
          alt={product.title}
        />{" "}
        {/* 'alt' için 'product.title' kullanımı daha doğru */}
        <h3 className="text-center">{product.title}</h3>{" "}
        {/* Ürün başlığını göster */}
        <p className="text-center">
          <FaStar className="text-danger" />
          {product.rating}
        </p>
        <p className="text-center">
          Fiyat:
          <span className="border border-primary rounded m-2 p-2 fs-5">
            {product.price}
          </span>
          TL
        </p>
        <button
          onClick={() => addToCart(product)}
          className="btn btn-primary w-100"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
