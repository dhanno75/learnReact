// import MyOwnComponent from "./Custom";
// import ServiceAPI from "./Api";

// const App = () => {
//   // const content = [
//   //   {
//   //     price: "$5",
//   //     productName: "Video",
//   //     description: "some sample description",
//   //   },
//   //   {
//   //     price: "$5",
//   //     productName: "Video",
//   //     description: "some sample description",
//   //   },
//   // ];
//   return (
//     <>
//       <div>this is from App Component </div>
//       <MyOwnComponent />
//       <ServiceAPI />
//     </>
//   );
// };

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReadInput from "./components/ReadInput";

const App = () => {
  return (
    <Container>
      <h2>Todo list</h2>
      <ReadInput />
    </Container>
  );
};

export default App;
