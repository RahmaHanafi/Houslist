export default function CityCard({ img, title }) {
  return (
    <div
      className={
        "xl:w-2/12 max-sm:w-11/12 shadow-xl bg-white  mx-3 mb-6 rounded-lg group cursor-pointer "
      }
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={img}
          alt="livng room"
          className="rounded-t-lg scale-100 group-hover:scale-110 cursor-pointer ease-in duration-300  object-cover"
          style={{ height: "15rem" }}
        />
      </div>

      <div className="flex justify-between px-4">
        <div className="py-4 space-y-1">
          <p className="text-stone-500 text-sm font-semibold">02 properties</p>
          <h1 className=" text-xl font group-hover:text-emerald-500 ease-in duration-200">
            {title}
          </h1>
        </div>
        <div className="rotate-45 bg-emerald-50  text-emerald-400 rounded-full w-10 h-10 text-center py-1 my-auto group-hover:rotate-0  ease-in duration-300 group-hover:bg-emerald-400  group-hover:text-white">
          <i className="fa-solid fa-arrow-up text-xl"></i>
        </div>
      </div>
    </div>
  );
}
