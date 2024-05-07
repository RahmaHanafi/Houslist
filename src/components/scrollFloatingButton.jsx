import { useState } from "react";
// import "./../input.css";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 270) {
      setVisible(true);
    } else if (scrolled <= 270) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div className="d-flex flex-row-reverse ">
        <button
          className={
            "z-50 btn btn-circle text-emerald-50  bg-emerald-700  border-emerald-700 hover:bg-emerald-900 hover:border-emerald-900 text-center py-1  me-10 mb-10 cursor-pointer bottom-0 right-0 non " +
            (visible ? "fixed" : "none")
          }
          onClick={scrollToTop}
          aria-label="scroll to top"
        >
          <i className="fa-solid fa-angle-up text-xl"></i>
        </button>
      </div>
    </>
  );
}
