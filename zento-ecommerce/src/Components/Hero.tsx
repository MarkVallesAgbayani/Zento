import { Link } from "react-router-dom";
import hero from "../assets/images/Hero.jpg";
function Hero() {
  return (
    <header>
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
        className="relative text-white"
      >
        {/* NAV */}
        <nav className="flex justify-around items-center py-5 font-bold ">
          <h1 className="text-2xl tracking-wider shadow-2xl text-black">
            ZENTO
          </h1>

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

            <Link to="/about">
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
                className="p-2 text-sm rounded-full w-30 shadow-2xl cursor-pointer"
              >
                About
              </button>
            </Link>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <section className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
          <p className="text-6xl md:text-8xl uppercase font-bold max-w-5xl leading-tight  text-black">
            Redefine your urban edge
          </p>

          <Link to="/explore">
            <button className="bg-white text-black font-semibold w-40 p-2 rounded-full shadow-2xl cursor-pointer">
              Explore More
            </button>
          </Link>
        </section>
      </div>
    </header>
  );
}

export default Hero;
