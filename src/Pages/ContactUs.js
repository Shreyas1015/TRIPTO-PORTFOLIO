import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactUsForm from "../Components/ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid m-0 p-0">
        <img className="img-fluid" src="/Images/svg (1).png" alt="" />
        <div className="container contact-us-container position-relative mx-auto p-0 mb-4">
          <h2 className="big-headers text-light text-center">Contact Us</h2>
        </div>
        <div className="container my-2">
          <div className="row m-0 p-0">
            <div className="col-lg-6 px-2 py-3 ">
              <img
                src="/Images/2-Cars.png"
                className="img-fluid object-fit-cover cars_2"
                alt=""
              />
            </div>
            <div className="col-lg-6 px-5 py-3 media-contact-text">
              <h1 className="sub-headers">Get In Touch</h1>
              <h2 className="big-headers">Any Question?</h2>
              <h2 className="big-headers">Write Down And Send Us</h2>
              <ContactUsForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
