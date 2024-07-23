import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/Fragments/ProductCard";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/products.service";
import useLogin from "../hooks/useLogin";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  // Penggunaan componentDidMount menggunakan stateless component
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // Penggunaan componentDidUpdate menggunakan stateless component
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // Penggunaan useRef untuk menghilangkan total price dari useEffect jika tidak ada barang di cart
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });

  // Pengambilan data menggunakan api
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (productId) => {
    return () => {
      if (cart.find((item) => item.id === productId)) {
        setCart(
          cart.map((item) =>
            item.id === productId ? { ...item, qty: item.qty + 1 } : item
          )
        );
      } else {
        setCart([...cart, { id: productId, qty: 1 }]);
      }
    };
  };

  return (
    <>
      <div className="bg-blue-500 h-16 flex justify-end items-center px-10 text-white">
        {username && <p className="mr-5">Welcome, {username}</p>}
        <Button
          classname="bg-slate-950 hover:bg-slate-700 ml-5"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <div className="flex justify-center mt-5">
        <div className="pl-5 w-4/6 flex flex-wrap gap-x-2">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id}>
                <ProductCard.Header img={product.image} />
                <ProductCard.Body title={product.title}>
                  {product.description}
                </ProductCard.Body>
                <ProductCard.Footer
                  price={product.price}
                  onClick={handleAddToCart(product.id)}
                />
              </ProductCard>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-black font-bold text-2xl">Keranjang</h1>
          <table>
            <thead>
              <tr>
                <th>Nama Produk</th>
                <th>Harga</th>
                <th>Jumlah</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr className="text-center" key={item.id}>
                      <td>{product.title.substring(0, 15)}...</td>
                      <td>
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
