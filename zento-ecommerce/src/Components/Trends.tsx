import image1 from "/src/assets/Images/portrait1.jpg";
import image2 from "/src/assets/Images/portrait2.jpg";
import image3 from "/src/assets/Images/portrait3.jpg";

function Trends() {
  return (
    <>
      <header>
        <section>
          <div className="flex flex-row justify-between mx-30 p-3 mt-30">
            <h1 className="font-bold tracking-wide text-2xl ">Today's Trend</h1>
            <button className="cursor-pointer bg-[#1E1E1E] text-white p-3 text-sm w-30 rounded-full ">
              View More
            </button>
          </div>
        </section>
        <section>
          <div className="flex gap-10 justify-center items-center my-30">
            <img src={image1} className="w-100 rounded-2xl" />
            <img src={image2} className="w-100 rounded-2xl" />
            <img src={image3} className="w-100 rounded-2xl" />
          </div>
        </section>
      </header>
    </>
  );
}
export default Trends;
