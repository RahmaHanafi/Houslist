import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const PropertyCard = ({
  img,
  type,
  amount,
  category,
  title,
  scrollPosition,
  // howSectionRef,
  // visible,
}) => {
  return (
    <div
      className={
        "w-10/12 sm:w-2/5 lg:w-3/12 shadow-xl bg-white rounded-t-lg  group cursor-pointer"
        // (visible
        //   ? " animate-wiggle -translate-y-6 duration-1000 ease-out"
        //   : " opacity-0 translate-y-14 duration-500")
      }
      // ref={howSectionRef}
    >
      <div className="relative overflow-hidden cardImg rounded-t-lg">
        <LazyLoadImage
          src={img}
          alt={title}
          className="rounded-t-lg scale-100 group-hover:scale-110 ease-in duration-300  object-cover w-full"
          style={{ height: "17rem" }}
          scrollPosition={scrollPosition}
        />
        <div className="bg-emerald-500 text-white w-20 text-center p-2 absolute top-5 left-4">
          For {type}
        </div>
        <div className=" text-white w-28 text-center p-1 absolute left-4 bottom-9 text-2xl font-bold z-10 flex">
          ${amount}/{" "}
          <p className="pt-1 text-lg text-gray-300  font-medium ">mo</p>
        </div>
        <div className="bg-white text-emerald-500 w-28 text-center p-1 absolute  rounded-t-lg left-4 bottom-0 z-10">
          {category}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h1 className=" text-xl text-black font group-hover:text-emerald-500 cursor-pointer ease-in duration-200">
          {title}
        </h1>
        <p className="text-stone-500">
          <i className="fa-solid fa-location-dot"></i> Downey, California
        </p>
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <div className="bg-emerald-50 rounded-full w-7 h-7 text-center">
              <i className="fa-solid fa-bed text-emerald-400 text-sm"></i>
            </div>
            <p className="text-stone-500 text-sm py-1">Beds: 03</p>
          </div>
          <div className="flex space-x-2">
            <div className="bg-teal-50 rounded-full w-7 h-7 text-center">
              <i className="fa-solid fa-shower text-emerald-400 text-sm"></i>
            </div>
            <p className="text-stone-500 text-sm py-1">Baths: 02</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default trackWindowScroll(PropertyCard);
