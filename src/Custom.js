import React from "react";
// import { Button } from "bootstrap";
import ButtonComponent from "./Button";
import CardComponent from "./Card";

const Custom = () => {
  const handler = function () {
    alert("working");
  };

  // const confirmDelete = () => {
  //   if (window.confirm("Are you sure to delete the record?")) {
  //     alert("deleted successfully");
  //   }
  // };
  return (
    <div className="text-center fs-1 fw-bold">
      Custom
      {/* <Button variant="primary" onClick={func}></Button> */}
      <CardComponent></CardComponent>
      <ButtonComponent clickHandler={handler}>Show Alert</ButtonComponent>
    </div>
  );
};

// export default Custom;
// when sharing data then state
