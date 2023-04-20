export default function Title({
  bgTitle,
  subTitle,
  primaryTitle,
  textPosition,
}) {
  return (
    <div className=" relative">
      <p className="bg-font text-9xl text-gray-200 max-sm:text-5xl max-sm:text-center">
        {bgTitle}
      </p>

      <p className="uppercase font-semibold text-emerald-400 xl:absolute xl:top-14 max-sm:text-center max-sm:relative">
        {subTitle}
      </p>
      <p className="capitalize text-3xl font-bold xl:absolute xl:top-20 font max-sm:text-center max-sm:relative">
        {primaryTitle}
      </p>
    </div>
  );
}
