import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const OurClients = ({ scrollPosition }) => {
  const brands = [
    {
      id: 0,
      description: "brand1",
      logo: "https://cdn.worldvectorlogo.com/logos/blackhawk-furniture.svg",
    },
    {
      id: 1,
      description: "brand2",
      logo: "https://cdn.worldvectorlogo.com/logos/business-travel-international-38681.svg",
    },
    {
      id: 2,
      description: "brand3",
      logo: "https://cdn.worldvectorlogo.com/logos/international-1.svg",
    },
    {
      id: 3,
      description: "brand4",
      logo: "https://cdn.worldvectorlogo.com/logos/kronheims-furniture.svg",
    },
    {
      id: 4,
      description: "brand5",
      logo: "https://cdn.worldvectorlogo.com/logos/the-real-estate-teleguide.svg",
    },
    {
      id: 5,
      description: "brand6",
      logo: "https://cdn.worldvectorlogo.com/logos/professionals-real-estate.svg",
    },
  ];
  return (
    <section className="flex flex-wrap justify-center space-x-2 max-sm:py-10 md:py-16 xl:py-28 gap-5">
      <div className="w-10/12 md:w-3/12 space-y-5 py-10">
        <p className="uppercase font-semibold text-xl text-emerald-500  text-center md:text-start max-sm:relative list-disc">
          our Clients
        </p>
        <p className="capitalize text-3xl font-bold   font text-center text-black md:text-start">
          We're going to became partners for the long run
        </p>
        <p className=" text-gray-500 text-base  text-center md:text-start">
          Ghen an unknown printer took a galley of type andscr ambledit to make
          a type specimen book has survived not only five centuries but also.
        </p>
      </div>

      <div className="flex flex-wrap w-10/12  md:w-1/2 lg:gap-5 justify-between max-sm:mx-auto">
        {brands.map((brand) => (
          <LazyLoadImage
            src={brand.logo}
            className="filter-gray ease-in-out duration-500 cursor-pointer hover:shadow-emerald-100 hover:z-50 hover:shadow-xl w-1/2 sm:w-1/3 lg:w-1/4 h-28 "
            alt={brand.description}
            key={brand.id}
            scrollPosition={scrollPosition}
          />
        ))}
      </div>
    </section>
  );
};

export default trackWindowScroll(OurClients);
