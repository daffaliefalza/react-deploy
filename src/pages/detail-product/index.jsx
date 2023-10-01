import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className=" max-w-[1000px] mx-auto mt-[150px] text-[1.6rem] ">
      <h2 className="font-bold text-[2rem] mb-5">Product Details</h2>
      <p>No: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <p>Category: {product.category}</p>
      <img src={product.image} alt={product.name} />
      <p>Freshness: {product.freshness}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default DetailProduct;
