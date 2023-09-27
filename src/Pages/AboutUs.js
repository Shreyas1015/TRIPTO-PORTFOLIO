import React from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid m-0 p-0">
        <img className="img-fluid" src="/Images/svg.png" alt="" />
        <div className="container about-us-container position-relative mx-auto p-0 mb-4">
          <h2 className="sub-headers">Why Choose Us</h2>
          <h1 className="big-headers mb-5">Reason For Choosing Us</h1>
          <div className="row">
            <div className="col-lg-4">
              <Cards
                header="Safety First "
                para="Your safety is our top priority. All our vehicles undergo regular maintenance and safety checks to ensure worry-free travel."
              />
            </div>
            <div className="col-lg-4">
              <Cards
                header="Professional Drivers "
                para="Our experienced and courteous drivers are committed to providing you with a smooth and pleasant journey."
              />
            </div>
            <div className="col-lg-4">
              <Cards
                header="Wide Range of Vehicles"
                para="From compact cars to spacious SUVs, we offer a diverse range of vehicles to suit your preferences and group size."
              />
            </div>
            <div className="col-lg-4">
              <Cards
                header="Affordable Pricing"
                para="We believe that travel should be accessible to all. Our competitive pricing ensures that you get the best value for your money."
              />
            </div>
            <div className="col-lg-4">
              <Cards
                header="Easy Booking"
                para="Booking a trip with TRIPTO is simple and hassle-free. Our user-friendly online platform and responsive customer support make the process a breeze."
              />
            </div>
            <div className="col-lg-4">
              <Cards
                header="Customer Satisfaction"
                para="We take pride in the smiles we've put on our customers' faces. Your satisfaction is our motivation."
              />
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <h1 className="sub-headers m-0 p-0 text-center">About Us</h1>
          <h1 className="big-headers p-0 m-0 text-center mb-5">
            Best Cab Services
          </h1>
          <div className="row m-0 p-0">
            <div className="col-lg-6 px-2 py-3 ">
              <img
                src="/Images/2-Cars.png"
                className="img-fluid object-fit-cover cars_2"
                alt=""
              />
            </div>
            <div className="col-lg-6 px-5 py-3 media-about-text">
              <h1 className="sub-headers fs-1 mb-3">Tripto Cab Services</h1>
              <p className="fs-5">
                "Welcome to TRIPTO - Your Trusted Travel Partner At TRIPTO,
                we're dedicated to creating unforgettable journeys. With modern
                vehicles and a team of professionals, we ensure safe and
                comfortable travel. Explore solo, plan a romantic getaway, or
                organize a group excursion with TRIPTO's curated packages. From
                scenic landscapes to cultural marvels, we offer diverse
                destinations to leave you awe-struck. Your safety is paramount.
                Our vehicles are well-maintained and equipped with advanced
                safety features, ensuring a secure voyage. Beyond
                transportation, we assist with itinerary planning,
                accommodations, and provide local insights for an enriching
                adventure. Join us at TRIPTO, and let's create lasting memories
                together."
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
