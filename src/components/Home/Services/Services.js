import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import Fluoride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import Teath from "../../../images/teath.png";

const serviceData = [
  {
    name: "Fluoride Treatment",
    image: Fluoride,
  },
  {
    name: "Cavity Filling",
    image: Cavity,
  },
  {
    name: "Teeth Whitening",
    image: Teath,
  },
];

const Services = () => {
  return (
    <section className="service-container">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center m-5">
        <div className="w-75 row">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
