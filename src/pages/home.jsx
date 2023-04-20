import { useEffect, useRef, useState } from "react";
import "./../input.css";
import PropertyCard from "../components/property_card";
import CityCard from "../components/city_card";
import Title from "../components/title";
import IconButton from "../components/icon_button";
import AgentsCard from "../components/agent_card";
import ScrollButton from "../components/scrollFloatingButton";
import Footer from "../components/footer";
import FirstSection from "../components/first_home_section";

export default function Home() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      // img: "https://img.freepik.com/free-photo/green-sofa-white-living-room-with-free-space_43614-834.jpg?w=996&t=st=1681563946~exp=1681564546~hmac=eb7a2619356e969a5c4814a85c1b33c53303c61a5338bee2987e5d56f1c6db6e",
      img: "https://img.freepik.com/free-photo/interior-design-with-photoframes-couch_23-2149385435.jpg?w=1060&t=st=1681583090~exp=1681583690~hmac=cc2932d49baf841b0d31d98ac5f3a9ec55de912efb48fc2b1f2cd33d59b677ff",
      title: "Family House For Sell",
      type: "Sell",
      type_id: 3,
      amount: "15,000",
      category: "Appartment",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=1060&t=st=1681572892~exp=1681573492~hmac=4d7fc7c3af18810ca48e9064f1d89e583a2104586b8af229611b3a5a18130ea8",
      title: "Countryside Modern Lake View ",
      type: "Rent",
      type_id: 2,
      amount: "12,000",
      category: "Villa",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg?w=1060&t=st=1681572970~exp=1681573570~hmac=96396e49d1d2e44e3b3292d54489c895733b35b650c5c3976cf148e86022f839",
      title: "Family House For Sell",
      type: "Rent",
      type_id: 2,
      amount: "18,000",
      category: "Office",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/gray-sofa-white-living-room-with-copy-space_43614-884.jpg?w=1380&t=st=1681572426~exp=1681573026~hmac=2a8ecf72dfb574ba62bafa50c2f8690fffec9bee8578f0dcb4ba0ef4c830907c",
      title: "Countryside Modern Lake View ",
      type: "Sell",
      type_id: 3,
      amount: "19,000",
      category: "Commercial",
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2053.jpg?w=1060&t=st=1681572477~exp=1681573077~hmac=8473bbcac96a3a1a7388e3c0c523c6764a1c2ef2cd092acce37f3064e880404d",
      title: "Family House For Sell",
      type: "Sell",
      type_id: 3,
      amount: "30,000",
      category: "Villa",
    },
    {
      id: 6,
      img: "https://img.freepik.com/free-photo/nobody-office-lobby-with-wooden-bench_1262-3579.jpg?w=1060&t=st=1681572500~exp=1681573100~hmac=b07f817f3fc3cfe6802fc5235b76695776cb423d2d1fd2f13c9ee3198d9d0d1a",
      title: "Countryside Modern Lake View ",
      type: "Rent",
      type_id: 2,
      amount: "25,000",
      category: "Office",
    },
  ]);

  const [types, settypes] = useState([
    {
      id: 1,
      title: "All Types",
    },
    {
      id: 2,
      title: "For Rent",
    },
    {
      id: 3,
      title: "For Sell",
    },
  ]);

  const [currenttype, setCurrenttype] = useState(1);

  const [cities, setCities] = useState([
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/giant-building-with-sun_1127-400.jpg?w=1060&t=st=1681585127~exp=1681585727~hmac=0e34be3de3e4878ed82d257c239eb450863d1c58f50f269ba85cbb1d9c3e3f76",
      title: "Los Angeles",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/row-old-buildings-made-classic-style-barcelona-spain_1268-17995.jpg?w=1380&t=st=1681585287~exp=1681585887~hmac=b9319655e844d6279880f559474a746f58e6422a1aa6e34862bbf98ce13cb8e4",
      title: "San Francisco",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/modetn-city-luxury-center-dubai-united-arab-emirates_231208-7596.jpg?w=1060&t=st=1681585329~exp=1681585929~hmac=225b8c39378bcd5f4b323c0e0b73c8dee6bea5e7797f5899fb9d6e6d4f5ef172",
      title: "Madrid",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/giant-building-with-sun_1127-400.jpg?w=1060&t=st=1681585127~exp=1681585727~hmac=0e34be3de3e4878ed82d257c239eb450863d1c58f50f269ba85cbb1d9c3e3f76",
      title: "Sydney",
    },
  ]);

  const [agents, setAgents] = useState([
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=1060&t=st=1681590530~exp=1681591130~hmac=bd3819676f1018370f2a7418c9b06dff9b99de65e312414efcd4d3b56bb14e41",
      name: "Andren Willium",
      description: "Sunshine",
      phone: "000 000 0000",
      Listings: "01",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1060&t=st=1681843269~exp=1681843869~hmac=5d1f0c910f479da8d276dfe16d0404d3282a377c4a811b70258425042af1bae5",
      name: "Polly Matzinger",
      description: "Sweet Home",
      phone: "000 000 0000",
      Listings: "08",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=1060&t=st=1681590490~exp=1681591090~hmac=471469d9bfbb9f2c1572afde6c236d2b45bd0d04706f89f12793c60f863cfe06",
      name: "Patty Watson",
      description: "Eco Builders",
      phone: "000 000 0000",
      Listings: "07",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/attractive-eastern-woman-covers-head-with-white-headscarf-guard-her-dignity-power-has-special-dress-code-keeps-hands-crossed-looks-with-modesty-poses-purple-wall-islamic-rules_273609-26323.jpg?w=1060&t=st=1681590616~exp=1681591216~hmac=8da162cb3bf5359c5eddb78d951abf747e8681b749cd393876db38c64a85b4f3",
      name: "Sarah Boysen",
      description: "Mark Street",
      phone: "000 000 0000",
      Listings: "11",
    },
  ]);

  const propertiesToRender =
    currenttype === 1
      ? properties
      : properties.filter((property) => property.type_id === currenttype);

  const citySectionRef = useRef();

  const [visible, setVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 1,
      }
    );

    observer.observe(citySectionRef.current);
  }, []);

  const chooseSectionRef = useRef();

  const [choosevisible, setchooseVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setchooseVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 1,
      }
    );

    observer.observe(chooseSectionRef.current);
  }, []);

  const [videoVisible, setvideoVisible] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="bg">
          <nav className="bg-opacity-0 border-gray-200 dark:bg-gray-900 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2Flogo_light.png?alt=media&token=06f0238a-cb8c-4afe-8c04-aa4b40a04502"
                  className="h-10 mr-3"
                  alt="Flowbite Logo"
                />
              </a>

              <div className="flex md:order-2 space-x-3">
                <IconButton
                  icon={<i className="fa-solid fa-code-compare"></i>}
                  flag={false}
                />
                <IconButton
                  icon={<i className="fa-regular fa-heart"></i>}
                  flag={false}
                />
                <IconButton
                  icon={<i className="fa-regular fa-user"></i>}
                  flag={true}
                />
                <button
                  type="button"
                  className="font text-white bg-emerald-400 hover:bg-emerald-500  rounded-full font-medium px-4 py-2 text-center mr-3 md:mr-0 group "
                >
                  <i className="fa-solid fa-circle-plus group-hover:rotate-180 ease-in duration-300 me-2"></i>
                  Add Property
                </button>
                {/* <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button> */}
              </div>
              {/* <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}
            </div>
          </nav>
          <FirstSection />
        </div>

        <section className="xl:py-28 flex flex-wrap justify-center space-x-2  ">
          <div className="xl:w-3/12 space-y-5">
            <p className="uppercase font-semibold text-xl text-emerald-400  max-sm:text-center max-sm:relative list-disc">
              our Clients
            </p>
            <p className="capitalize text-3xl font-bold   font max-sm:text-center">
              We're going to became partners for the long run
            </p>
            <p className=" text-gray-500 text-base  max-sm:text-center">
              Ghen an unknown printer took a galley of type andscr ambledit to
              make a type specimen book has survived not only five centuries but
              also.
            </p>
          </div>

          <div className="flex flex-wrap xl:w-6/12 gap-5 justify-between max-sm:w-7/12 max-sm:mx-auto">
            <img
              src="https://www.templates.sokowave.com/houslisti/img/brand/brand1.svg"
              className="filter-gray ease-in-out duration-500 cursor-pointer hover:shadow-emerald-100 hover:shadow-xl"
            />
            <img
              src="https://www.templates.sokowave.com/houslisti/img/brand/brand6.svg"
              className="filter-gray ease-in-out duration-500 cursor-pointer hover:shadow-emerald-100 hover:shadow-xl"
            />
            <img
              src="https://www.templates.sokowave.com/houslisti/img/brand/brand2.svg"
              className="filter-gray ease-in-out duration-500 cursor-pointer hover:shadow-emerald-100 hover:shadow-xl"
            />
            <img
              src="https://www.templates.sokowave.com/houslisti/img/brand/brand3.svg"
              className="filter-gray ease-in-out duration-500 cursor-pointer hover:shadow-emerald-100 hover:shadow-xl"
            />
            <img
              src="https://www.templates.sokowave.com/houslisti/img/brand/brand4.svg"
              className="filter-gray ease-in-out duration-500 cursor-pointer hover:shadow-emerald-100 hover:shadow-xl"
            />
            <img
              src="https://www.templates.sokowave.com/houslisti/img/brand/brand5.svg"
              className="filter-gray ease-in-out duration-300 cursor-pointer hover:shadow-emerald-100 hover:shadow-xl"
            />
          </div>
        </section>

        <section className="bg-teal-50 py-12">
          <div className="flex  justify-around flex-wrap">
            <Title
              bgTitle={"properties"}
              subTitle={"Our PROPERTIES"}
              primaryTitle={"Latest Properties"}
            />
            <div className="space-x-2 xl:mt-16 max-sm:mt-5">
              {types.map((type) => (
                <button
                  key={type.id}
                  className={
                    "btn rounded-full btn-outline border-emerald-400 hover:bg-emerald-400 hover:border-emerald-400 " +
                    (type.id === currenttype
                      ? " bg-emerald-400 text-white"
                      : " text-gray-500")
                  }
                  onClick={() => {
                    setCurrenttype(type.id);
                  }}
                >
                  {type.title}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center xl:py-12 max-sm:py-5">
            {propertiesToRender.map((property) => (
              <PropertyCard
                key={property.id}
                img={property.img}
                type={property.type}
                amount={property.amount}
                category={property.category}
                title={property.title}
              />
            ))}
          </div>
        </section>

        <section className="py-10">
          {/* <div
            className={
              "absolute w-full h-full z-20  bg-gray-800 bg-opacity-70 " +
              (videoVisible ? "fixed" : "hidden")
            }
          >
            <div className={"  w-6/12   top-20 left-84 "} tabIndex="-1">
              <div className="mfp-container mfp-iframe-holder">
                <div className="mfp-content">
                  <div className="mfp-iframe-scaler ">
                    <button
                      title="Close (Esc)"
                      type="button"
                      // className="btn btn-circle"
                      onClick={() => {
                        setvideoVisible(false);
                        console.log("close");
                      }}
                    >
                      ×
                    </button>
                    <iframe
                      className="mfp-iframe w-5/6 h-96 "
                      src="//www.youtube.com/embed/1iIZeIy7TqM?autoplay=1"
                      allowFullScreen=""
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className=" flex flex-wrap xl:space-x-5 justify-center ">
            <div
              className={
                "xl:w-4/12  mx-5 relative" +
                (choosevisible ? " animate-fadeInLeft" : " opacity-0")
              }
              ref={chooseSectionRef}
            >
              <img
                className="rounded-lg scale-90  hover:scale-95  ease-in duration-300  object-cover drop-shadow-xl"
                src="https://img.freepik.com/free-photo/frame-mockup-luxury-dining-room-cream-color-background_41470-5110.jpg?w=740&t=st=1681907432~exp=1681908032~hmac=e2101bbaff7da9a6eb2d34bf6c7f0946bbce2e54a9a50841fe4edc34df35c7c5"
              />

              <span className=" absolute flex h-8 w-8 bottom-52 right-60 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <button
                  className="relative btn btn-circle border-white  bg-white text-emerald-400  hover:bg-emerald-400 hover:border-emerald-400 hover:text-white bottom-2 right-2 "
                  onClick={() => {
                    setvideoVisible(true);
                    console.log("open");
                  }}
                >
                  <i className="fa-solid fa-play"></i>
                </button>
              </span>
            </div>
            <div
              className={
                " xl:w-4/12 max-sm:w-10/12 " +
                (choosevisible ? "animate-fadeInRight" : " opacity-0")
              }
              ref={chooseSectionRef}
            >
              <Title
                bgTitle={"Choose"}
                subTitle={"Why Choose Our Properties"}
                primaryTitle={"The experts in local and international property"}
                textPosition={"text-start"}
              ></Title>
              <p className="mt-10 mb-6 text-lg text-gray-500 max-sm:text-center ">
                Agent hen an unknown printer took a galley of type and scramble
                d it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic.{" "}
              </p>

              <div className="flex space-x-2 max-sm:justify-center">
                <i className="fa-solid fa-check text-emerald-400 py-1"></i>
                <p className=" font-semibold">Outstanding property</p>
              </div>
              <div className="flex space-x-2 max-sm:justify-center">
                <i className="fa-solid fa-check text-emerald-400 py-1"></i>
                <p className=" font-semibold">Modern City Locations</p>
              </div>
              <div className="flex space-x-2 max-sm:justify-center">
                <i className="fa-solid fa-check text-emerald-400 py-1"></i>
                <p className=" font-semibold">Specialist services</p>
              </div>
              <div className="flex space-x-2 max-sm:justify-center">
                <i className="fa-solid fa-check text-emerald-400 py-1"></i>
                <p className=" font-semibold">Market-leading research</p>
              </div>
              <div className="flex max-sm:justify-center">
                <button className=" btn mt-5 bg-emerald-50 border-emerald-50 text-emerald-500 hover:bg-emerald-400 hover:text-white hover:border-emerald-400 ">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-teal-50 py-12 ">
          <div className={"flex justify-center "}>
            <Title
              bgTitle={"Locations"}
              subTitle={"Top Areas"}
              primaryTitle={"Find Your Neighborhood"}
              textPosition={"text-start"}
            />
          </div>

          <div
            className={
              "flex flex-wrap justify-center py-12 " +
              (visible
                ? " animate-wiggle -translate-y-6 duration-1000 ease-out"
                : " opacity-0 translate-y-14 duration-500")
            }
            ref={citySectionRef}
          >
            {cities.map((city) => (
              <CityCard key={city.id} img={city.img} title={city.title} />
            ))}
          </div>
        </section>

        <section className="py-5">
          <div className="flex justify-center">
            <Title
              bgTitle={"Our Agents"}
              subTitle={"Expertise Is Here"}
              primaryTitle={"Our Exclusive Agetns"}
              textPosition={"text-center"}
            />
          </div>
          <div className="flex flex-wrap justify-center py-12 ">
            {agents.map((agent) => (
              <AgentsCard
                key={agent.id}
                img={agent.img}
                name={agent.name}
                phone={agent.phone}
                description={agent.description}
                Listings={agent.Listings}
              />
            ))}
          </div>
        </section>

        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}
