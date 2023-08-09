export default function IconButton({ icon, flag }) {
  return (
    <div className=" relative group">
      {flag ? (
        ""
      ) : (
        <span className="badge badge-md bg-emerald-400 border-emerald-400 absolute right-0  bottom-9 text-white group-hover:text-emerald-400 group-hover:bg-white group-hover:border-white">
          0
        </span>
      )}

      <button className="btn btn-circle btn-outline border-white text-white hover:bg-emerald-400 hover:border-emerald-400 ">
        {icon}
      </button>
    </div>
  );
}
