import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const CardComponent = ({ children, clickIt }) => {
  return (
    <div
      style={{ width: "200px", padding: "15px", backgroundColor: "olivedrab" }}
    >
      <ul>
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Vestibulum at eros</li>
      </ul>
    </div>
  );
};

// export default CardComponent;
