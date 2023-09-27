import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="card our-services-cards mx-auto my-3 text-center px-3 py-3 glassomorphic-effect">
        <div className="card-body">
          <h5 className="card-title mb-4">
            <i className={props.icon} style={{ color: "#272525" }} />
          </h5>
          <h6 className="card-subtitle mb-2 fs-2 fw-bolder mb-3">
            {props.header}
          </h6>
          <p className="card-text mb-3 fs-5">{props.para}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
