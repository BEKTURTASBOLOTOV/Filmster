import React, { useEffect, useState } from "react";
// import uppButton from "../navbar/image/button-to-upp.svg";

const ScrollButton = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onscroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onscroll);
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, right: -1, behavior: "smooth" });
  };
  return (
    <div>
      {offset > 500 ? (
        <button className="ScrollButton" onClick={handleClick}>
          <svg
            enableBackground="new 0 0 32 32"
            height="32px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
          >
            <path
              d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
              // fill="#fff"
            />
          </svg>
        </button>
      ) : (
        <button className="ScrollHidden" onClick={handleClick}>
          Go upp
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
