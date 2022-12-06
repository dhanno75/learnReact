import React from "react";

const ButtonComponent = ({ children, clickHandler }) => {
  return (
    <div>
      <button
        style={{
          border: "none",
          padding: "15px 20px",
          backgroundColor: "orangered",
          color: "white",
        }}
        onClick={clickHandler}
      >
        {children}
      </button>
    </div>
  );
};

// export default ButtonComponent;
