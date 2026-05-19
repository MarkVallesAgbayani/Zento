import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <nav className="flex justify-around items-center py-5 font-bold ">
        <Link to="/">
          <button className="cursor-pointer">
            <h1 className="text-2xl tracking-wider shadow-2xl text-black">
              ZENTO
            </h1>
          </button>
        </Link>

        <div className="flex gap-6 tracking-wide">
          <Link to="/shopnow">
            <button
              style={{
                backgroundColor: "#1E1E1E",
                color: "white",
              }}
              className="p-2 text-sm border rounded-full w-30 shadow-2xl cursor-pointer"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </nav>

      <section>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HEADER */}
            <div className="lg:text-center">
              <h2 className="mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase">
                About Us
              </h2>

              <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Your trusted destination for quality products and great deals.
              </p>

              <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                We are committed to bringing you affordable, high-quality
                products with a smooth and secure shopping experience. Customer
                satisfaction is at the heart of everything we do.
              </p>
            </div>

            {/* FEATURES */}
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {/* Feature 1 */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                      <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                    </div>
                    <p className="ml-16 text-lg font-bold text-gray-700">
                      Fast & Reliable Delivery
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We ensure your orders are processed quickly and delivered
                    safely right to your doorstep.
                  </dd>
                </div>

                {/* Feature 2 */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                      <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                    </div>
                    <p className="ml-16 text-lg font-bold text-gray-700">
                      Secure Payments
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Shop with confidence using safe and encrypted payment
                    methods that protect your data.
                  </dd>
                </div>

                {/* Feature 3 */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                      <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                    </div>
                    <p className="ml-16 text-lg font-bold text-gray-700">
                      Affordable Prices
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We offer competitive prices so you can enjoy more value for
                    every purchase.
                  </dd>
                </div>

                {/* Feature 4 */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                      <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                    </div>
                    <p className="ml-16 text-lg font-bold text-gray-700">
                      24/7 Customer Support
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Our support team is always ready to help you with your
                    orders, concerns, and inquiries anytime.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
