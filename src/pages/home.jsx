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

// const navbarPages = [{
//   id:0,
//   title:"home",

// }]

export default function Home() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      // img: "https://img.freepik.com/free-photo/green-sofa-white-living-room-with-free-space_43614-834.jpg?w=996&t=st=1681563946~exp=1681564546~hmac=eb7a2619356e969a5c4814a85c1b33c53303c61a5338bee2987e5d56f1c6db6e",
      img: "https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2Finterior-design-with-photoframes-couch.jpg?alt=media&token=18d07b5b-89cd-4930-82d0-bc0ffc3cd6d4",
      title: "Family House For Sell",
      type: "Sell",
      type_id: 3,
      amount: "15,000",
      category: "Appartment",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Countryside Modern Lake View ",
      type: "Rent",
      type_id: 2,
      amount: "12,000",
      category: "Villa",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Family House For Sell",
      type: "Rent",
      type_id: 2,
      amount: "18,000",
      category: "Office",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/10486238/pexels-photo-10486238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Countryside Modern Lake View ",
      type: "Sell",
      type_id: 3,
      amount: "19,000",
      category: "Commercial",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/3946663/pexels-photo-3946663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Family House For Sell",
      type: "Sell",
      type_id: 3,
      amount: "30,000",
      category: "Villa",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "San Francisco",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2955030/pexels-photo-2955030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      img: "https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2F2.PNG?alt=media&token=940f5b9d-4704-4631-a6e0-763de66ca977",
      name: "Andren Willium",
      description: "Sunshine",
      phone: "000 000 0000",
      Listings: "01",
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2F3.PNG?alt=media&token=a9debda5-e29d-4ab0-92a0-e576abcc75bd",
      name: "Polly Matzinger",
      description: "Sweet Home",
      phone: "000 000 0000",
      Listings: "08",
    },
    {
      id: 3,
      img: "https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2Fwaist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg?alt=media&token=55ac7147-9615-4c16-8921-b2cab0aa452a",
      name: "Patty Watson",
      description: "Eco Builders",
      phone: "000 000 0000",
      Listings: "07",
    },
    {
      id: 4,
      img: "https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2Fattractive-eastern-woman-covers-head-with-white-headscarf-guard-her-dignity-power-has-special-dress-code-keeps-hands-crossed-looks-with-modesty-poses-purple-wall-islamic-rules.jpg?alt=media&token=f26797df-cb17-4b95-a874-f2e21cf64eb7",
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
        threshold: 0,
      }
    );

    observer.observe(citySectionRef.current);
  }, []);

  const chooseSectionRef = useRef();

  const [choosevisible, setchooseVisible] = useState();

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setchooseVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          observer1.unobserve(entry.target);
        }
      },
      {
        threshold: 1,
      }
    );

    observer1.observe(chooseSectionRef.current);
  }, []);

  const [videoVisible, setvideoVisible] = useState(false);

  const [menuVisible, setmenuVisible] = useState(false);

  // const [navBarvisible, setnavBarVisible] = useState(false);

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 270) {
  //     setnavBarVisible(true);
  //   } else if (scrolled <= 270) {
  //     setnavBarVisible(false);
  //   }
  // };
  // window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div className="relative">
        <div className="bg">
          <nav className="bg-opacity-0 border-gray-200 dark:bg-gray-900">
            <div className="w-11/12 flex items-center justify-between mx-auto p-4 ">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2Flogo_light.png?alt=media&token=06f0238a-cb8c-4afe-8c04-aa4b40a04502"
                  className="h-10 mr-3"
                  alt="Flowbite Logo"
                />
              </a>

              <ul className="gap-5 hidden xl:flex">
                <li className=" text-emerald-400 text-xl font hover:text-emerald-400 ease-in-out duration-300 cursor-pointer">
                  Home
                </li>
                <li className=" text-white text-xl font hover:text-emerald-400 ease-in-out duration-300 cursor-pointer">
                  About
                </li>
                <li className=" text-white text-xl font hover:text-emerald-400 ease-in-out duration-300 cursor-pointer">
                  Property
                </li>
                <li className=" text-white text-xl font hover:text-emerald-400 ease-in-out duration-300 cursor-pointer">
                  papes
                </li>
                <li className=" text-white text-xl font hover:text-emerald-400 ease-in-out duration-300 cursor-pointer">
                  Contact
                </li>
              </ul>

              <div className=" space-x-3 hidden lg:flex">
                <IconButton
                  icon={<i className="fa-solid fa-code-compare"></i>}
                  flag={false}
                  // className="max-sm:hidden"
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
                  className="font text-white bg-emerald-400 hover:bg-emerald-500  rounded-full font-medium px-4 py-2 text-center  md:mr-0 group "
                >
                  <i className="fa-solid fa-circle-plus group-hover:rotate-180 ease-in duration-300 me-2"></i>
                  Add Property
                </button>
              </div>

              <div className=" xl:hidden">
                <button
                  className="btn  btn-circle bg-white text-emerald-400  xl:hidden hover:bg-emerald-400 hover:text-white "
                  onClick={() => {
                    setmenuVisible(!menuVisible);
                  }}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
                <div className=" bg-white absolute left-0 w-screen me-5 z-50">
                  <ul
                    className={
                      menuVisible ? "ease-in-out duration-300  " : "hidden"
                    }
                  >
                    <li className="text-black text-xl font hover:text-emerald-400 ease-in-out duration-300 cursor-pointer p-2">
                      Home
                    </li>
                    <hr></hr>
                    <li className=" text-black text-xl font hover:text-emerald-400 ease-in-out duration-300 cursor-pointer p-2">
                      About
                    </li>
                    <hr></hr>
                    <li className=" text-black text-xl font hover:text-emerald-400 ease-in-out duration-300 cursor-pointer p-2">
                      Property
                    </li>
                    <hr></hr>
                    <li className=" text-black text-xl font hover:text-emerald-400 ease-in-out duration-300 cursor-pointer p-2">
                      papes
                    </li>
                    <hr></hr>
                    <li className=" text-black text-xl font hover:text-emerald-400 ease-in-out duration-300 cursor-pointer p-2">
                      Contact
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <FirstSection />
        </div>

        <section className="flex flex-wrap justify-center space-x-2 max-sm:py-10 md:py-16 xl:py-28">
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

          <div className="flex flex-wrap w-7/12 md:w-full lg:w-6/12 gap-5 justify-between max-sm:mx-auto">
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
          <div className="flex justify-between flex-wrap items-center w-11/12 mx-auto">
            <Title
              bgTitle={"properties"}
              subTitle={"Our PROPERTIES"}
              primaryTitle={"Latest Properties"}
            />
            <div className="space-x-2 mt-5 xl:mt-16 mx-auto md:mx-0">
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

          <div className="flex flex-wrap justify-center py-5 lg:py-12">
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
                src="https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2Fhome.PNG?alt=media&token=6336d908-d268-4858-b18d-25adea214abe"
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
                : "  opacity-0 translate-y-14 duration-500")
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
