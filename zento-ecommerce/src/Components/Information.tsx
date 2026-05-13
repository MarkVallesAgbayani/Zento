function Information() {
  return (
    <>
      <section className="flex flex-row gap-30 mx-auto items-center justify-center text-left  p-5 h-200">
        <div>
          <div>
            <img
              src="../src/assets/Images/Promo2.jpg"
              alt="Information Image One"
              className="w-200 rounded-3xl shadow-2xl shadow-gray-400"
            />
          </div>
          <div>
            <p className="text-2xl max-w-2xl my-3">
              Discover a collection where architectural precision meets
              street-ready comfort. Curated for those who lead, never follow.
            </p>
          </div>
        </div>

        <div>
          <div>
            <img
              src="../src/assets/Images/Promo1.jpg"
              alt="Information Image Two"
              className="w-90 rounded-3xl shadow-2xl shadow-gray-400"
            />
          </div>
          <div>
            <p className="text-sm max-w-85 my-3">
              We bridge the gap between high-fashion silhouettes and the raw
              energy of the city.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Information;
