import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ShopNow() {
  const [products, setProduct] = useState<any[]>([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setProduct(data);
      console.log(data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const [cart, setCart] = useState<any[]>([]);
  const handleClick = (productCart) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === productCart.id);

      if (exists) return prev; // already added, do nothing

      return [...prev, productCart]; // add only this product
    });
  };

  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className="flex mx-10 justify-end items-end flex-col mt-10">
        <label htmlFor="category" className="font-bold mb-3 text-2xl">
          Category
        </label>
        <div className="flex gap-2 p-2 items-center">
          <select className="w-40 rounded-xl border p-1">
            <option value="categories">asdasd</option>
          </select>
          <div className="flex items-center gap-2">
            🛒 <span>{cart.length}items</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto justify-center items-center">
        {products.map((product) => (
          <div key={product.id} className="mx-10 my-10">
            <div className="max-w-md w-full">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-75"></div>
                  <img
                    src={product?.image}
                    alt="Product Image"
                    className="w-full h-64 object-cover object-center relative z-10"
                  />
                  <div className="absolute top-4 right-4 bg-gray-100 text-xs font-bold px-3 py-2 rounded-full z-20 transform rotate-12">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
                    {product?.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {product?.description.slice(0, 130)}...
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-indigo-600">
                      ${product?.price}
                    </span>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-600">
                        {product?.rating?.rate} ({product?.rating?.count}{" "}
                        reviews)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleClick(product)}
                    className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
