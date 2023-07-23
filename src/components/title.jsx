export default function Title({
  bgTitle,
  subTitle,
  primaryTitle,
  textPosition,
}) {
  return (
    <div className="relative mx-auto md:mx-0">
      <p className="bg-font text-5xl text-center sm:text-start lg:text-9xl lg:text-start text-gray-200 ">
        {bgTitle}
      </p>

      <p className="uppercase font-semibold text-emerald-400 lg:absolute lg:top-14 max-sm:text-center max-sm:relative">
        {subTitle}
      </p>
      <p className="capitalize text-3xl font-bold lg:absolute lg:top-20 font max-sm:text-center max-sm:relative">
        {primaryTitle}
      </p>
    </div>
  );
}
