import { useContext } from "react";
import { ProductContext } from "../context/productContext"; // Abone olunacak context'i çağır
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";

const Home = () => {
  // Product context yapısına abone oluyoruz
  const { products, error, isLoading } = useContext(ProductContext); // 'products' ismiyle veri kullanılıyor

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        products && (
          <div className="wrapper">
            {products.map(
              (
                product // 'item' yerine 'product' kullan
              ) => (
                <Card product={product} key={product.id} /> // 'item' yerine 'product' kullan ve 'item' prop'unu 'product' olarak gönder
              )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Home;
