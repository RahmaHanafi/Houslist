import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const AgentsCard = ({
  img,
  Listings,
  name,
  description,
  phone,
  scrollPosition,
}) => {
  return (
    <div className="w-10/12 sm:w-2/5 lg:w-3/12 xl:w-1/6 shadow-xl bg-white  mx-3 mb-6 rounded-lg group cursor-pointer motion-safe:animate-wiggle">
      <div className="relative overflow-hidden  m-4 ">
        <LazyLoadImage
          src={img}
          alt={name}
          className=" scale-100 group-hover:scale-110 cursor-pointer ease-in duration-300  object-cover w-full aspect-auto"
          style={{ height: "15rem" }}
          scrollPosition={scrollPosition}
        />
        <div className="bg-white text-emerald-800  w-28 text-center font-semibold p-1 absolute   left-4 bottom-4 z-10 hover:bg-emerald-800 hover:text-white">
          {Listings} Listings
        </div>
        <button
          className=" hidden rounded-full w-10 h-10 text-center py-2 my-auto absolute group-hover:inline  ease-in duration-300 group-hover:bg-emerald-400  group-hover:text-white top-4 right-4"
          aria-label="contact accounts"
        >
          <i className="fa-solid fa-diagram-project text-xl"></i>
        </button>
      </div>

      <div className="px-4 pb-6 space-y-1">
        <h1 className=" text-xl font text-black group-hover:text-emerald-500 ease-in duration-200">
          {name}
        </h1>
        <p className="text-stone-500 text-sm font-semibold">{description}</p>
        <p className="text-stone-500 text-sm">
          <i className="fa-solid fa-phone text-sm"></i> Call: +{phone}
        </p>
      </div>
    </div>
  );
};

export default trackWindowScroll(AgentsCard);
