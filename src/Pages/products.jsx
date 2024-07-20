import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/Fragments/ProductCard";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    img: "/images/Gurun.png",
    title: "Padang Sahara",
    price: 600000,
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima est ex quas, illum perspiciatis sunt cumque, totam quia reprehenderit, ratione voluptatum impedit doloribus. Eius laborum consequatur ab enim perspiciatis quae!`,
  },
  {
    id: 2,
    img: "/images/Gurun.png",
    title: "Gurun",
    price: 800000,
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Penggunaan componentDidMount menggunakan stateless component
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, [])

  // Penggunaan componentDidUpdate menggunakan stateless component
  useEffect(() => {
    if(cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
  
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart])

  // Penggunaan useRef untuk menghilangkan total price dari useEffect jika tidak ada barang di cart
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if(cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row';
    } else {
      totalPriceRef.current.style.display = 'none';
    }
  });

  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
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
        {email}
        <Button
          classname="bg-slate-950 hover:bg-slate-700 ml-5"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <div className="flex justify-center mt-5">
        <div
          className="pl-5 w-4/6 flex flex-wrap gap-x-2"
        >
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductCard.Header img={product.img} />
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
                {cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr className="text-center" key={item.id}>
                      <td>{product.title}</td>
                      <td>
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
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
                    <b>{totalPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</b>
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
