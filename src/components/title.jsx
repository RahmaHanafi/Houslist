export default function Title({
  bgTitle,
  subTitle,
  primaryTitle,
  textPosition,
}) {
  return (
    <div className="relative mx-auto md:mx-0 max-sm:w-10/12">
      <p className="bg-font text-5xl text-center lg:text-9xl md:text-start text-gray-300 ">
        {bgTitle}
      </p>

      <p className="uppercase font-semibold text-emerald-500 lg:absolute lg:top-14 text-center md:text-start max-sm:relative">
        {subTitle}
      </p>
      <p className="capitalize text-3xl text-black font-bold lg:absolute lg:top-20 font text-center md:text-start max-sm:relative">
        {primaryTitle}
      </p>
    </div>
  );
}
