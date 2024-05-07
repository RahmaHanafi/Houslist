export default function IconButton({ icon, flag, label }) {
  return (
    <div className=" relative group">
      {flag ? (
        ""
      ) : (
        <span className="badge badge-md bg-emerald-800 border-emerald-800 absolute right-0  bottom-9 text-white group-hover:text-emerald-800 group-hover:bg-white group-hover:border-white ">
          0
        </span>
      )}

      <button
        className="btn btn-circle btn-outline border-white text-white hover:bg-emerald-800 hover:border-emerald-800 group-hover:text-white"
        aria-label={label}
      >
        {icon}
      </button>
    </div>
  );
}
