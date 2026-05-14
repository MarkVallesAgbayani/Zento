import { useState, useEffect, type ChangeEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Explore() {
  const [products, setProducts] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState<any[]>([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error Fetching data", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase()),
  );

  const handleCartClick = () => {
    setShow(true);
  };

  const handleCartExit = () => {
    setShow(false);
  };

  const handleAddToCart = (product: any) => {
    const existingProducts = cart.find((item) => item.id === product.id);

    if (existingProducts) return;

    setCart([...cart, product]);
  };
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md transition hover:bg-indigo-700 cursor-pointer"
          aria-label="Cart"
          onClick={handleCartClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.414 0 .774.287.867.69l.387 1.683 1.327 6.58a2.25 2.25 0 0 0 2.208 1.797h7.304a2.25 2.25 0 0 0 2.208-1.797l1.18-5.846a.75.75 0 0 0-.737-.902H6.512L6.11 4.09A2.25 2.25 0 0 0 3.636 2.25H2.25Zm7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          </svg>
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[11px] font-bold text-white">
            0
          </span>
        </button>
        {show && (
          <section className="fixed top-20 right-4 z-50">
            <div className="bg-white flex flex-col h-full p-10 w-[450px] shadow-lg">
              <div className="flex items-center mb-3 justify-between ">
                <h2 className="text-[#191919] text-xl font-medium leading-[30px]">
                  Shopping Cart ({cart.length})
                </h2>
                <button onClick={handleCartExit} aria-label="Close cart">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="22.5" cy="22.5" r="22.5" fill="white"></circle>
                    <path
                      d="M28.75 16.25L16.25 28.75"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16.25 16.25L28.75 28.75"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              {cart.map((item) => (
                <div className="flex gap-2 mb-6 items-center">
                  <img width="120" height="100" src={item.image} alt="" />
                  <div>
                    <h3 className="w-[216px] text-[#191919] text-sm font-normal leading-[21px]">
                      {item.title}
                    </h3>
                    <p>
                      <span className="relative justify-start text-[#7f7f7f] text-sm font-normal leading-[21px]">
                        1 kg x
                      </span>
                      <span className="relative justify-start text-[#191919] text-sm font-semibold leading-[16.80px]">
                        {" "}
                        {item.price}
                      </span>
                    </p>
                  </div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_629_6652)">
                      <path
                        d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z"
                        stroke="#CCCCCC"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M16 8L8 16"
                        stroke="#666666"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M16 16L8 8"
                        stroke="#666666"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_629_6652">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              ))}

              <div className="mt-auto">
                <div className="py-6 bg-white flex justify-between items-center">
                  <span className="relative justify-start text-[#191919] text-base font-normal leading-normal">
                    {cart.length} Product
                  </span>
                  <span className="relative justify-start text-[#191919] text-base font-semibold leading-tight">
                    $
                    {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                  </span>
                </div>
                <button className="w-full px-10 py-4 bg-[#00b206] rounded-[43px] text-white text-base font-semibold leading-tight">
                  Checkout
                </button>
                <button className="w-[376px] mt-3 px-10 py-4 bg-[#56ac59]/10 rounded-[43px] text-[#00b206] text-base font-semibold leading-tight">
                  Go To Cart
                </button>
              </div>
            </div>
          </section>
        )}
      </div>{" "}
      <div>
        <input
          className="border items-center flex justify-center mx-auto w-80 h-9 rounded-full p-2"
          placeholder="Search products..."
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-wrap mx-auto justify-center items-center">
        {filterProducts.map((product) => (
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
                    onClick={() => handleAddToCart(product)}
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
