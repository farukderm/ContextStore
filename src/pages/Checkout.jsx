import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Checkout = () => {
  const { cart, removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  // Toplam tutarı hesapla
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );

  // Siparişi onayla butonuna basıldığında çalışacak fonksiyon
  const handleConfirmOrder = () => {
    alert("Siparişiniz onaylandı!"); // Kullanıcıya sipariş onayı mesajı göster
    // Sipariş onaylandıktan sonra başka işlemler de yapabilirsiniz (örn. API çağrısı, yönlendirme)
  };

  return (
    <div className="container mt-4">
      {cart.length === 0 ? (
        <p className="alert alert-warning text-center">Sepete ürün ekleyiniz</p>
      ) : (
        <>
          {cart.map((product) => (
            <div className="card mb-3" key={product.id}>
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={product.thumbnail} // Ürün resmini göster
                    className="img-fluid rounded-start"
                    alt={product.title}
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Fiyat: {product.price} TL</p>
                    <p className="card-text">Miktar: {product.amount}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-primary w-25 btn-sm"
                        onClick={() => increaseAmount(product.id)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-warning w-25 btn-sm"
                        onClick={() => decreaseAmount(product.id)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-danger w-25 btn-sm"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Toplam Tutar */}
          <div className="text-end mt-3">
            <h4>Toplam Fiyat: {totalPrice.toFixed(2)} TL</h4>
          </div>

          {/* Siparişi Onayla Butonu */}
          <div className="text-end mt-3">
            <button
              className="btn btn-success"
              onClick={handleConfirmOrder} // Siparişi onayla butonuna tıklandığında çalışacak fonksiyonu ekle
            >
              Siparişi Onayla
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
