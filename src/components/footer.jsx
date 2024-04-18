export default function Footer() {
  return (
    <>
      <footer>
        <div className=" bg-footerBg bg-fixed bg-no-repeat py-20 ">
          <div className="w-10/12 sm:w-4/5 lg:w-3/4 flex flex-wrap justify-between lg:justify-center gap-8 lg:gap-5 mx-auto">
            <div className="w-full sm:w-7/12 lg:w-1/4 max-sm:flex max-sm:justify-center">
              <div className="space-y-5 w-full">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2Flogo_light.png?alt=media&token=06f0238a-cb8c-4afe-8c04-aa4b40a04502"
                  className="h-10 mr-3  w-auto"
                  alt="Flowbite Logo"
                />
                <p className=" text-gray-300 text-base w-full">
                  Lorem sit adipisicing elit. facere magni possimus molestiae,
                  voluptas magnam. Minus dolorem quisquam!
                </p>

                <div className="flex space-x-1 max-sm:justify-center">
                  <div className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-emerald-400 group w-10 text-center">
                    <i className="fa-brands fa-facebook-f group-hover:animate-bounce"></i>
                  </div>
                  <div className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-emerald-400 group w-10 text-center">
                    <i className="fa-brands fa-twitter group-hover:animate-bounce"></i>
                  </div>
                  <div className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-emerald-400 group w-10 text-center">
                    <i className="fa-brands fa-instagram group-hover:animate-bounce"></i>
                  </div>
                  <div className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-emerald-400 group w-10 text-center">
                    <i className="fa-brands fa-whatsapp group-hover:animate-bounce"></i>
                  </div>
                  <div className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-emerald-400 group w-10 text-center">
                    <i className="fa-brands fa-pinterest-p group-hover:animate-bounce"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-4/12 lg:w-1/6 space-y-5 ">
              <h1 className="font text-white font-semibold text-xl">
                Quick Links
              </h1>
              <hr className=" w-14 "></hr>
              <ul className=" text-gray-300 font-semibold list-disc px-3">
                <li className=" hover:text-emerald-400 hover:translate-x-3 duration-300 cursor-pointer">
                  About Us
                </li>
                <li className=" hover:text-emerald-400 hover:translate-x-3 duration-300 cursor-pointer">
                  Blogs & Articles
                </li>
                <li className=" hover:text-emerald-400 hover:translate-x-3 duration-300 cursor-pointer">
                  Terms & Conditions
                </li>
                <li className=" hover:text-emerald-400 hover:translate-x-3 duration-300 cursor-pointer">
                  Privacy Policy
                </li>
                <li className=" hover:text-emerald-400 hover:translate-x-3 duration-300 cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-7/12 lg:w-1/3 space-y-5 ">
              <h1 className="font text-white font-semibold text-xl">
                Instagram
              </h1>
              <hr className=" w-14 "></hr>
              <div className="flex flex-wrap gap-2 w-full">
                <div className=" overflow-hidden relative group w-24 h-24 cursor-pointer">
                  <img
                    className=" object-cover h-full w-full scale-100 group-hover:scale-110 duration-300 ease-in"
                    src="https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150765.jpg?w=1060&t=st=1681951771~exp=1681952371~hmac=6501361d459c8ca0a3e8ef784df5e1ac4a3104637134e9f551ea8f0706e98eb1"
                    alt="villa"
                  />
                  <div className=" bg-emerald-400 h-full w-full bg-opacity-50  text-center absolute  top-0 hidden group-hover:inline  ease-in duration-300">
                    <i className="fa-brands fa-instagram text-white py-10"></i>
                  </div>
                </div>
                <div className=" overflow-hidden relative group w-24 h-24 cursor-pointer">
                  <img
                    className=" object-cover h-full w-full scale-100 group-hover:scale-110 duration-300 ease-in"
                    src="https://img.freepik.com/free-photo/beautiful-swimming-pool-resort_1339-7054.jpg?w=1060&t=st=1681951811~exp=1681952411~hmac=a1e02f43ece1a979a54381a633577918c7a72c0c4fc991adbf653ed09f3355b0"
                    alt="villa"
                  />
                  <div className=" bg-emerald-400 h-full w-full bg-opacity-50  text-center absolute  top-0 hidden group-hover:inline  ease-in duration-300">
                    <i className="fa-brands fa-instagram text-white py-10"></i>
                  </div>
                </div>
                <div className=" overflow-hidden relative group w-24 h-24 cursor-pointer">
                  <img
                    className=" object-cover h-full w-full scale-100 group-hover:scale-110 duration-300 ease-in"
                    src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=1060&t=st=1681951853~exp=1681952453~hmac=7b59b7b09a9ce8ebf7cc8cb4935a1622430df4fa232820669df52e5790894659"
                    alt="villa"
                  />
                  <div className=" bg-emerald-400 h-full w-full bg-opacity-50  text-center absolute  top-0 hidden group-hover:inline  ease-in duration-300">
                    <i className="fa-brands fa-instagram text-white py-10"></i>
                  </div>
                </div>
                <div className=" overflow-hidden relative group w-24 h-24 cursor-pointer">
                  <img
                    className=" object-cover h-full w-full scale-100 group-hover:scale-110 duration-300 ease-in"
                    src="https://img.freepik.com/free-photo/courtyard-monastery-park_1268-15399.jpg?w=1060&t=st=1681951874~exp=1681952474~hmac=059a429c0f71b9cc05cc0dcaaae7cf59a060fac4045c082b2ae8ffec3d9450b4"
                    alt="villa"
                  />
                  <div className=" bg-emerald-400 h-full w-full bg-opacity-50  text-center absolute  top-0 hidden group-hover:inline  ease-in duration-300">
                    <i className="fa-brands fa-instagram text-white py-10"></i>
                  </div>
                </div>
                <div className=" overflow-hidden relative group w-24 h-24 cursor-pointer">
                  <img
                    className=" object-cover h-full w-full scale-100 group-hover:scale-110 duration-300 ease-in"
                    src="https://img.freepik.com/free-photo/road-city_1417-1426.jpg?w=1060&t=st=1681951906~exp=1681952506~hmac=57890729f9a1c581194c57a22d0af6378dbdec8023fb925374292d963462eeaf"
                    alt="villa"
                  />
                  <div className=" bg-emerald-400 h-full w-full bg-opacity-50  text-center absolute  top-0 hidden group-hover:inline  ease-in duration-300">
                    <i className="fa-brands fa-instagram text-white py-10"></i>
                  </div>
                </div>
                <div className=" overflow-hidden relative group w-24 h-24 cursor-pointer">
                  <img
                    className=" object-cover h-full w-full scale-100 group-hover:scale-110 duration-300 ease-in"
                    src="https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?w=1380&t=st=1681951955~exp=1681952555~hmac=7c9a61dee1256fc4f65fb49bb2734cad7a41b781e3d170e368e75cc72698bb30"
                    alt="villa"
                  />
                  <div className=" bg-emerald-400 h-full w-full bg-opacity-50  text-center absolute  top-0 hidden group-hover:inline  ease-in duration-300">
                    <i className="fa-brands fa-instagram text-white py-10"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-4/12 lg:w-1/6 space-y-5 ">
              <h1 className="font text-white font-semibold text-xl">Contact</h1>
              <hr className=" w-14 "></hr>

              <div className="flex space-x-2">
                <i className="fa-solid fa-location-dot text-gray-300 py-1"></i>
                <p className=" text-gray-300">
                  121 King St, Melbourne den 3000, Australia
                </p>
              </div>
              <div className="group flex space-x-2 cursor-pointer">
                <i className="fa-solid fa-envelope text-gray-300 py-1  group-hover:text-gray-500 duration-300"></i>
                <p className=" text-gray-300  group-hover:text-emerald-400  duration-300">
                  info@example.com
                </p>
              </div>
              <div className="group flex space-x-2 cursor-pointer">
                <i className="fa-solid fa-phone text-gray-300 py-1 group-hover:text-gray-500 duration-300"></i>
                <p className=" text-gray-300 group-hover:text-emerald-400  duration-300">
                  +000 000 0000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap bg-sky-950 justify-around py-8 ">
          <div className="flex flex-wrap gap-5">
            <a
              className=" text-gray-300 hover:text-emerald-400 ease-in-out duration-300 cursor-pointer  "
              href="#"
            >
              Terms of Use
            </a>
            <a
              className=" text-gray-300 hover:text-emerald-400 ease-in-out duration-300 cursor-pointer "
              href="#"
            >
              Privacy Policy
            </a>
          </div>
          <div className=" text-gray-300">
            2023 © HousListi. All rightre served by Sokowave
          </div>
        </div>
      </footer>
    </>
  );
}
