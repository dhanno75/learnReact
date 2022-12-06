import React, { useState } from "react";

const ServiceAPI = () => {
  const [apiData, setApiData] = useState([]);
  const url = "https://63539e82ccce2f8c02f9ceee.mockapi.io/api";

  const getDetails = async () => {
    const response = await fetch(url);
    setApiData(await response.json());
  };

  getDetails();
  // console.log(apiData);

  return <div>from api</div>;
};

// export default ServiceAPI;
