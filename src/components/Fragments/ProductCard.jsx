import Button from "../Elements/Button";

const ProductCard = (props) => {
  const { children, size = "max-w-sm" } = props;
  return (
    <div className={`max-w-xs ${size} my-2 rounded border shadow-xl border-gray-300 flex flex-col justify-between`}>
      {children}
    </div>
  );
};

const Header = (props) => {
  const { img } = props;
  return (
    <a href="#">
      <img
        className="rounded-t max-h-56 w-full"
        src={img}
        alt="Gambar Produk"
      />
    </a>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="p-5 h-full">
      <p className="text-xl font-semibold">{title.substring(0, 15)}...</p>
      <p>{children.substring(0, 100)}...</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, onClick } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-3">
      <p className="text-lg">{price.toLocaleString('id-ID', {style: 'currency', currency: 'USD'})}</p>
      <Button classname="bg-blue-500 hover:bg-blue-700" onClick={onClick}>+ Keranjang</Button>
    </div>
  );
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;
