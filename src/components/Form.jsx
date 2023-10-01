import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../features/products/productSlice";

const Form = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    freshness: "Brand New",
    price: "",
    image: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      const extension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        setErrorMessage("Invalid file format. Please upload an image.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setProduct({ ...product, image: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const isValidProduct = (product) => {
    const requiredFields = ["name", "category", "freshness", "price"];
    const missingFields = requiredFields.filter(
      (field) => !product[field].trim()
    );

    if (missingFields.length > 0) {
      setErrorMessage("All fields are required");
      return false;
    }

    const nameRegex = /^[a-zA-Z0-9\s]+$/;
    const priceRegex = /^\d+(\.\d{1,2})?$/;

    if (
      !nameRegex.test(product.name.trim()) ||
      !nameRegex.test(product.category.trim()) ||
      !["Brand New", "Second hand", "Refurbished"].includes(
        product.freshness
      ) ||
      !priceRegex.test(product.price.trim())
    ) {
      setErrorMessage("Invalid input. Please check your data.");
      return false;
    }

    return true;
  };
  const handleAddProduct = () => {
    if (!isValidProduct(product)) {
      setErrorMessage("All fields are required");
      return;
    }

    if (editIndex !== null) {
      dispatch(updateProduct({ index: editIndex, product }));
    } else {
      dispatch(addProduct(product));
    }

    resetForm();
  };

  const handleEditProduct = (index) => {
    const productToEdit = products[index];
    setProduct({ ...productToEdit });
    setEditIndex(index);
  };

  const handleDeleteProduct = (index) => {
    const confirmDelete = window.confirm(
      "Apakah Anda ingin menghapus data ini?"
    );
    if (confirmDelete) {
      dispatch(deleteProduct(index));
    }
  };

  const resetForm = () => {
    setProduct({
      name: "",
      category: "",
      freshness: "Brand New",
      price: "",
      image: "",
    });
    setErrorMessage("");
    setEditIndex(null);
  };

  return (
    <section className="px-5 max-w-[800px] mx-auto mt-[100px] md:px-0">
      <h2 className="text-[2rem] font-bold">Detail Product</h2>
      <form id="form">
        <div className="form-group my-3">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={`border w-full p-2 ${
              errorMessage ? "border-red-500" : ""
            }`}
            value={product.name}
            onChange={handleInputChange}
          />
          {errorMessage && <div className="text-red-600">{errorMessage}</div>}
        </div>

        <div className="form-group my-3">
          <label htmlFor="category">Product Category</label>
          <select
            id="category"
            name="category"
            className={`border w-full p-2 ${
              errorMessage ? "border-red-500" : ""
            }`}
            value={product.category}
            onChange={handleInputChange}
          >
            <option value="">Choose...</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <div className="form-group my-3">
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full p-2 border"
            onChange={handleImageUpload}
          />
        </div>

        <div className="form-group my-3">
          <label>Product Freshness</label>
          {["Brand New", "Second hand", "Refurbished"].map(
            (freshnessOption) => (
              <div key={freshnessOption}>
                <input
                  type="radio"
                  name="freshness"
                  id={freshnessOption}
                  value={freshnessOption}
                  onChange={handleInputChange}
                  checked={product.freshness === freshnessOption}
                />
                <label htmlFor={freshnessOption}> {freshnessOption}</label>
              </div>
            )
          )}
        </div>

        <div className="form-group my-5 ">
          <label htmlFor="addition-description">Addition Description</label>
          <textarea
            id="addition-description"
            name="description"
            cols="30"
            rows="10"
            className={`border border-black-500 w-full p-2 ${
              errorMessage ? "border-red-500" : ""
            }`}
          ></textarea>
        </div>

        <div className="form-group my-5">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="$1"
            className={`w-full border p-2 ${
              errorMessage ? "border-red-500" : ""
            }`}
            value={product.price}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="button"
          className="w-full bg-teal-100 p-2"
          onClick={handleAddProduct}
        >
          {editIndex !== null ? "Update Product" : "Add Product"}
        </button>
      </form>

      {errorMessage && <div className="text-red-600">{errorMessage}</div>}

      <table className="mt-5 border border-gray-300 p-5 text-center w-full">
        <thead>
          <tr>
            <th className="p-3 border">No</th>
            <th className="p-3 border">Product Name</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Freshness</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Action</th>
            <th className="p-1 border">View Detail</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="border">{index + 1}</td>
              <td className="border">{product.name}</td>
              <td className="border">{product.category}</td>
              <td className="border">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100px", height: "auto" }}
                />
              </td>
              <td className="border">{product.freshness}</td>
              <td className="border">${product.price}</td>
              <td className="border">
                <button
                  onClick={() => handleEditProduct(index)}
                  className="bg-orange-300 py-2 px-5 rounded mr-3"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(index)}
                  className="bg-red-700 py-2 px-5 rounded text-white"
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() =>
                    navigate("/detail-product", {
                      state: { product: products[index] },
                    })
                  }
                  className=" bg-blue-300 py-2 px-5 rounded text-white"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Form;
