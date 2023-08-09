export default function CustomButton({ title, id, currentCategory }) {
  return (
    <>
      <button
        className={
          "btn rounded-full btn-outline border-emerald-400 hover:bg-emerald-400 hover:text-white " +
          (id === currentCategory
            ? " bg-emerald-400 text-white"
            : " text-gray-500")
        }
      >
        {title}
        {/* All Types{" "} */}
      </button>
    </>
  );
}
