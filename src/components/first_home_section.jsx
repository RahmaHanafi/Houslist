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
      <section className="w-11/12 sm:w-8/12 md:w-8/12 xl:w-6/12 flex-col justify-center mx-auto  ">
        <h1 className="font-bold text-white text-center animate-wiggle text-3xl xl:text-5xl font mx-auto pt-8 md:pt-32">
          Find the perfect place to Live with your family
        </h1>

        <div className="flex flex-wrap gap-5 mx-auto pt-10 pb-4 justify-center">
          {categories.map((category) => (
            <div key={category.id} className="flex gap-1">
              <button
                className={
                  "w-8 h-8 rounded-full text-center hover:bg-emerald-400 cursor-pointer ease-in duration-300 " +
                  (category.id === currentcategory
                    ? " bg-emerald-400"
                    : "  bg-gray-100 bg-opacity-25 ")
                }
                onClick={() => {
                  setCurrentcategory(category.id);
                }}
                aria-label={category.name}
              >
                <i className={category.icon + " text-white py-1 text-sm"}></i>
              </button>
              <p className="text-white">{category.name}</p>
            </div>
          ))}
        </div>

        <form>
          <div className="flex flex-wrap w-full xl:mx-auto mt-5 gap-2 md:gap-0 justify-center">
            <input
              type="search"
              id="search-dropdown"
              className="block p-3 z-20 w-11/12 md:w-4/12 max-sm:mx-auto rounded-lg md:rounded-r-none text-sm text-gray-600 bg-white  border-l-gray-100 border-l-2 border border-gray-300 !outline-none "
              placeholder="Enter keyword here..."
              required
            />

            <select
              className="p-3 w-11/12 md:w-3/12 max-sm:mx-auto rounded-lg md:rounded-none  text-gray-500 bg-white border shadow-sm outline-none cursor-pointer"
              aria-label="Property Type"
            >
              <option>Property Type</option>
              <option>Family House</option>
              <option>Apartment</option>
              <option>Condo</option>
            </select>

            <select
              className="p-3  w-11/12 md:w-3/12 max-sm:mx-auto rounded-lg md:rounded-none text-gray-500 bg-white border shadow-sm outline-none cursor-pointer"
              aria-label="All Cities"
            >
              <option>All Cities</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Philadelphia</option>
            </select>

            <button
              type="submit"
              className="md:w-2/12 uppercase gap-2 flex justify-center font p-5 text-sm font-medium text-white  bg-emerald-500 hover:bg-emerald-600 group max-sm:mx-auto rounded-lg md:rounded-l-none"
            >
              <i className="fa-solid fa-magnifying-glass group-hover:scale-125  py-1 ease-in duration-300"></i>
              Search
            </button>
          </div>
        </form>

        <div className="flex flex-wrap text-gray-300 text-xl gap-1 mx-auto w-full justify-center py-5 font-medium animate-wiggle  ">
          We’ve more than <p className="text-white font-bold">54,000</p>{" "}
          apartments, place & plot.{" "}
        </div>
      </section>
    </>
  );
}
