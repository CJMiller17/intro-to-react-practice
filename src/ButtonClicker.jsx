import { useState } from "react";

function ButtonClicker() {
  const [count, setCount] = useState(0);
  const warning = ["","No Touchy", "I said don't touch!", "I mean it!", "You're not going to like the consequences...", "I'm warning you...", "Stop while you still can!"]
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`btn btn-outline-light ${count ? "bg-danger" : ""}`}
      >
        Don't Touch {count}
      </button>
      <p className="bg-primary">
              {count < warning.length ? warning[count] : warning[warning.length - 1]}
      </p>
    </>
  );
}

export default ButtonClicker;
