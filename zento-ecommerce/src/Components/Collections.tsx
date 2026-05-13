import landscape from "/src/assets/Images/landscape.jpg";

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
            <img src={landscape} className="w-400 max-h-100 shadow-2xl" />
          </div>
          <div>
            <img src={landscape} className="w-400 max-h-100 shadow-2xl" />
          </div>
          <div>
            <img src={landscape} className="w-400 max-h-100 shadow-2xl" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Collections;
