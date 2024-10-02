import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    // Ürün sepette var mı?
    const found = cart.find((i) => i.id === newProduct.id);

    if (!found) {
      // Ürün sepette yoksa ürünü sepete ekle (miktar: 1)
      setCart([...cart, { ...newProduct, amount: 1 }]);
    } else {
      // Ürün sepette varsa miktarını arttır
      const updated = { ...found, amount: found.amount + 1 };

      // Sepet dizisinde eski ürün yerine güncel halini koy
      const newCart = cart.map((i) => (i.id === updated.id ? updated : i));
      setCart(newCart);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const increaseAmount = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseAmount = (id) => {
    const found = cart.find((i) => i.id === id);
    if (found && found.amount > 1) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      );
      setCart(updatedCart);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
