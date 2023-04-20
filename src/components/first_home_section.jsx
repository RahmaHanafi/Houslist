import { useState } from "react";

export default function FirstSection() {
  const [currentcategory, setCurrentcategory] = useState(0);
  const categories = [
    {
      id: 0,
      name: "Apartments",
      icon: "fa-regular fa-building",
    },
    {
      id: 1,
      name: "Home",
      icon: "fa-solid fa-house-chimney-window",
    },
    {
      id: 2,
      name: "Office",
      icon: "fa-solid fa-briefcase",
    },
    {
      id: 3,
      name: "Shop",
      icon: "fa-solid fa-shop",
    },
    {
      id: 4,
      name: "Villa",
      icon: "fa-solid fa-building",
    },
    {
      id: 5,
      name: "Restaurant",
      icon: "fa-solid fa-utensils",
    },
  ];

  return (
    <>
      <section className="">
        <h1 className="font-bold text-white text-5xl text-center animate-wiggle  xl:w-6/12 max-sm:w-11/12 max-sm:text-3xl font mx-auto xl:pt-32 max-sm:pt-8">
          Find the perfect place to Live with your family
        </h1>

        <div className="flex flex-wrap gap-5 xl:w-5/12 mx-auto pt-10 pb-4 max-sm:w-11/12 max-sm:justify-center">
          {categories.map((category) => (
            <div key={category.id} className="flex gap-1">
              <div
                className={
                  "w-8 h-8 rounded-full text-center hover:bg-emerald-400 cursor-pointer ease-in duration-300 " +
                  (category.id === currentcategory
                    ? " bg-emerald-400"
                    : "  bg-gray-100 bg-opacity-25 ")
                }
                onClick={() => {
                  setCurrentcategory(category.id);
                }}
              >
                <i className={category.icon + " text-white py-1 text-sm"}></i>
              </div>
              <p className="text-white">{category.name}</p>
            </div>
          ))}
        </div>

        <form>
          <div className="flex flex-wrap xl:w-7/12 max-sm:w-12/12  xl:mx-auto mt-5 max-sm:gap-2">
            <input
              type="search"
              id="search-dropdown"
              className="block p-3 xl:w-4/12 z-20 max-sm:w-11/12 max-sm:mx-auto max-sm:rounded-lg  text-sm text-gray-900 bg-white rounded-l-lg border-l-gray-100 border-l-2 border border-gray-300 !outline-none "
              placeholder="Enter keyword here..."
              required
            />
            <select className="p-3 xl:w-3/12 max-sm:w-11/12 max-sm:mx-auto max-sm:rounded-lg text-gray-400 bg-white border shadow-sm outline-none cursor-pointer">
              <option>Property Type</option>
              <option>Family House</option>
              <option>Apartment</option>
              <option>Condo</option>
            </select>
            <select className="p-3 xl:w-3/12 max-sm:w-11/12 max-sm:mx-auto max-sm:rounded-lg text-gray-400 bg-white border shadow-sm outline-none cursor-pointer">
              <option>All Cities</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Philadelphia</option>
            </select>

            <button
              type="submit"
              className="xl:w-2/12 uppercase gap-2 flex justify-center font p-5 text-sm font-medium text-white rounded-r-lg  bg-emerald-400 hover:bg-emerald-500 group max-sm:mx-auto max-sm:rounded-lg"
            >
              <i className="fa-solid fa-magnifying-glass group-hover:scale-125  py-1 ease-in duration-300"></i>
              Search
            </button>
          </div>
        </form>

        <div className="flex flex-wrap text-gray-300 text-xl gap-1  mx-auto xl:w-4/12 max-sm:w-11/12 max-sm:justify-center py-5 font-medium   animate-wiggle  ">
          We’ve more than <p className="text-white font-bold">54,000</p>{" "}
          apartments, place & plot.{" "}
        </div>
      </section>
    </>
  );
}
