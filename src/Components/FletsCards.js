import React from "react";

const FletsCards = (props) => {
  return (
    <>
      <div
        className="card glassomorphic-effect flets-card rounded-4 mx-auto my-3 m-0 p-0 overflow-hidden"
        style={{ width: "20rem" }}
      >
        <img
          src={props.image}
          className="card-img-top img-fluid object-fit-contain border-bottom"
          alt="..."
        />
        <div className="card-body m-0 p-0">
          <h5 className="card-title fs-4 fw-bolder my-3">{props.carname}</h5>
          <h5 className="card-sub-title fs-2 fw-bolder mb-3">{props.price}</h5>
          <a href="#book-your-ride" className="text-decoration-none text-dark">
            <button className="btn btn-lg btn-dark my-4">Book Your Cab</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default FletsCards;
