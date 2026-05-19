import image1 from "/src/assets/Images/pexels-karola-g-5632397.jpg";
import image2 from "/src/assets/Images/pexels-markus-winkler-1430818-19856616.jpg";
import image3 from "/src/assets/Images/pexels-saravut-vanset-23514839-32831065.jpg";

function Collections() {
  return (
    <>
      <section>
        <div>
          <h1 className="font-bold tracking-wide text-2xl mx-30 mt-20">
            Collections
          </h1>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center my-30">
          <div>
            <img src={image1} className="w-400 max-h-100 shadow-2xl" />
          </div>
          <div>
            <img src={image2} className="w-400 max-h-100 shadow-2xl" />
          </div>
          <div>
            <img src={image3} className="w-400 max-h-100 shadow-2xl" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Collections;
