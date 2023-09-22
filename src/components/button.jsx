export default function CustomButton({ title, id, currentCategory }) {
  return (
    <>
      <button
        className={
          "btn rounded-full btn-outline border-emerald-500 hover:bg-emerald-600 hover:text-white " +
          (id === currentCategory
            ? " bg-emerald-500 text-white"
            : " text-gray-500")
        }
      >
        {title}
        {/* All Types{" "} */}
      </button>
    </>
  );
}
