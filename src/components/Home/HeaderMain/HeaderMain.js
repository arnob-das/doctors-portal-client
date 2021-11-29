import React from "react";
import Chair from "../../../images/chair.png";
import './HeaderMain.css'

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3a4246" }}>
          Your New Smile <br />
          Starts Here
        </h1>
        <p className="text-secondary headerMain-subTitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          officiis harum illum eius id nihil?
        </p>
        <button className="btn btn-primary appointment-button">Get Appointment</button>
      </div>
      <div className="col-md-6">
        <img src={Chair} alt="Chair" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
