export default function CustomButton({ title, id, currentCategory }) {
  return (
    <>
      <button
        className={
          "btn rounded-full btn-outline border-emerald-800 hover:bg-emerald-800 hover:text-white " +
          (id === currentCategory
            ? " bg-emerald-800 text-white"
            : " text-gray-500")
        }
      >
        {title}
        {/* All Types{" "} */}
      </button>
    </>
  );
}
