import { useState, useEffect, type ChangeEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ShopNow() {
  const [products, setProduct] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  const handleFetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories",
      );
      setCategories(response.data);
    } catch (err) {
      console.error("Error fetching categories", err);
    }
  };

  useEffect(() => {
    handleFetch();
    handleFetchCategories();
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(input.toLowerCase());
    const matchesCategory = category === "" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleCartClick = () => setShow(true);
  const handleCartExit = () => setShow(false);

  const handleAddToCart = (product: any) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) return;

    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-indigo-50 to-cyan-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between rounded-3xl border border-white/80 bg-white/85 px-5 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Home
          </Link>

          <button
            type="button"
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-700 cursor-pointer"
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
              {cart.length}
            </span>
          </button>
        </header>

        <section className="mt-8 overflow-hidden rounded-3xl border border-white/70 bg-slate-950 px-6 py-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-200">
                Shop Now
              </span>
              <h1 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                Style your cart with a cleaner shopping experience.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Search products, filter by category, and open the cart in a
                polished drawer that stays easy to read.
              </p>
            </div>

            <div className="grid gap-3 rounded-3xl bg-white/10 p-4 backdrop-blur-sm sm:grid-cols-2">
              <input
                className="h-12 rounded-2xl border border-white/20 bg-white/95 px-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                placeholder="Search products..."
                value={input}
                onChange={handleOnChange}
              />
              <select
                id="category"
                value={category}
                onChange={handleOnChangeCategory}
                className="h-12 rounded-2xl border border-white/20 bg-white/95 px-4 text-slate-900 outline-none focus:border-indigo-500"
              >
                <option value="">All Categories</option>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {show && (
          <section className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm">
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl shadow-slate-950/30">
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Shopping Cart
                    </h2>
                    <p className="text-sm text-slate-500">
                      {cart.length} item{cart.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <button
                    onClick={handleCartExit}
                    aria-label="Close cart"
                    className="rounded-full px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-5 flex-1 space-y-4 overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
                      Your cart is empty.
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3"
                      >
                        <img
                          className="h-20 w-20 rounded-xl object-cover"
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-semibold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-500">
                            ${item.price}
                          </p>
                        </div>
                        <button
                          className="rounded-full p-2 text-slate-400 transition hover:bg-white hover:text-rose-500"
                          aria-label="Remove item"
                        >
                          ×
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Total</span>
                    <span className="font-semibold text-slate-900">
                      $
                      {cart
                        .reduce((acc, item) => acc + item.price, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <button className="mt-4 w-full rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="mt-10 flex justify-center">
          <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white/80 px-6 py-16 text-center text-slate-500 shadow-sm backdrop-blur">
                No products matched your search.
              </div>
            ) : (
              filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-violet-500 to-cyan-500 opacity-70" />
                    <img
                      src={product?.image}
                      alt={product?.title}
                      className="relative z-10 h-72 w-full object-cover object-center transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700 shadow-sm">
                      New
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        {product?.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-amber-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {product?.rating?.rate}
                      </div>
                    </div>

                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                      {product?.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {product?.description.slice(0, 130)}...
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-2xl font-black text-indigo-600">
                        ${product?.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
