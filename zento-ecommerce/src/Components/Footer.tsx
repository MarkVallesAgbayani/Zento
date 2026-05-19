import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className=" mx-auto w-full relative text-center bg-[#1E1E1E] text-white">
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            "Stay ahead of the curve. Join the Inner Circle for early access to
            new releases."
          </h2>
          <Link to="/shopnow">
            <button className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500">
              Get Started
            </button>
          </Link>

          <div className="mt-14 xl:mt-20">
            <p className="mt-7 text-base">
              © ZENTO E-COMMERCE PRODUCT LISTING 2026
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
