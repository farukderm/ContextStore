import axios from "axios";
import { createContext, useEffect, useState } from "react";

// context yapısı TEMELİNİ OLUŞTUR
export const ProductContext = createContext();

// HOC SAĞLAYICI BİLEŞEN
export const ProductProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]); // Başlangıç değeri boş bir dizi
  const [error, setError] = useState(null);

  // JSON API'den veri çekme ve state'e aktarma
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products); // Veriyi state'e kaydet
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // context değerlerini uygulamaya aktarma
  return (
    <ProductContext.Provider value={{ products, isLoading, error }}>
      {" "}
      {/* Değer nesne olarak geçildi */}
      {children}
    </ProductContext.Provider>
  );
};
