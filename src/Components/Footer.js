import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div className="container-fluid m-0 p-0 bg-dark text-light">
        <div className="container">
          <div className="row p-5 footer-padding">
            <div className="col-lg-3 px-4 col-6">
              <h2>About</h2>
              <br />
              <p>
                "TRIPTO: Creating Unforgettable Journeys. Safe, Comfortable, and
                Memorable Travel Experiences with Modern Fleet and Dedicated
                Team."
              </p>
            </div>
            <div className="col-lg-3 px-4 col-6">
              <h2>Main Attraction</h2>
              <br />
              <p>
                Luxurious cars <br />
                Safety assurance <br />
                Clean cars <br />
                Luggage management <br />
                Air conditioning 24x7 <br />
              </p>
            </div>
            <div className="col-lg-3 px-4 col-6">
              <h2>Services</h2>
              <br />
              <p>
                Driver less car <br />
                Out station <br />
                Round trips <br />
                Corporate cab service <br />
                Daily pick & drop <br />
              </p>
            </div>
            <div className="col-lg-3 px-4 col-6">
              <h2>Reach Us</h2>
              <br />
              <p
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                Ghatkopar west, <br />
                Mumbai :- 400086 <br />
                Maharashtra <br />
                triptotours.com@gmail.com <br />
                9372704624 <br />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container text-center ">
          <h2 className="sub-headers text-uppercase m-0 pb-4">
            the Outstation expert
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
