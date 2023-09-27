import React from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import FletsCards from "../Components/FletsCards";
import BookYourCabForm from "../Components/BookYourCabForm";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Landing Page */}
      <header>
        <div className="container-fluid m-0 p-0">
          <img
            className="landing-page-car position-absolute"
            src="/Images/5.png"
            alt=""
          />
          <img
            src="/Images/landing-page.jpg"
            className="img-fluid object-fit-cover"
            alt=""
          />
        </div>
      </header>

      {/* About Us */}
      <section id="about-us">
        <div className="container my-5" style={{ marginBottom: "5rem" }}>
          <div className="row text-center">
            <div className="col-lg-6 m-0 p-0">
              <img
                src="/Images/2-Cars.png"
                className="img-fluid object-fit-contain cars_2"
                alt=""
              />
            </div>
            <div className="col-lg-6 about-us-text text-start px-5 py-5">
              <h1 className="big-headers text-uppercase">About Us</h1>
              <h3 className="sub-headers text-uppercase">TRIPTO Cab Service</h3>
              <p>
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
              <p>Certified Company</p>
              <a
                href="#book-your-ride"
                className="text-decoration-none text-dark"
              >
                <button className="btn btn-lg blue-buttons">
                  Book Your Cab
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="container text-center box-4-container">
          <div className="row count-box mx-auto">
            <div className="col-lg-3 col-6 dark-blue-box text-center text-light">
              <div className="my-5">
                <h3 className="sub-headers mb-3">100 + </h3>
                <h6 className="fs-4">CABS</h6>
              </div>
            </div>
            <div className="col-lg-3 col-6 bg-light text-center ">
              <div className="my-5">
                <h3 className="sub-headers mb-3">1,00,000 km</h3>
                <h6 className="fs-4">EXPERIENCE</h6>
              </div>
            </div>
            <div className="col-lg-3 col-6 bg-dark text-center text-light">
              <div className="my-5">
                <h3 className="sub-headers mb-3">200 +</h3>
                <h6 className="fs-4">DRIVERS</h6>
              </div>
            </div>
            <div className="col-lg-3 col-6 blue-box text-center text-light">
              <div className="my-5">
                <h3 className="sub-headers mb-3">100 %</h3>
                <h6 className="fs-4">CUSTOMER SATISFACTION</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Flets */}
      <section id="our-flets">
        <div className="container-fluid m-0 p-0 py-5 background-svg border-top border-5 border-dark">
          <div className="container-fluid text-center flets-container">
            <h1 className="big-headers">Our Flets</h1>
            <h3 className="sub-headers">Best Cab Services For OutStations</h3>
            <div className="row my-5">
              <div className="col-lg-3">
                <FletsCards
                  image="/Images/1.png"
                  carname="Innova crysta(6 seater)"
                  price="18/km"
                />
              </div>
              <div className="col-lg-3">
                <FletsCards
                  image="/Images/2.png"
                  carname="Aura ( 4 seater )"
                  price="12/km"
                />
              </div>
              <div className="col-lg-3">
                <FletsCards
                  image="/Images/3.png"
                  carname="Ertiga ( 6 seater )"
                  price="15/km"
                />
              </div>
              <div className="col-lg-3">
                <FletsCards
                  image="/Images/4.png"
                  carname="Wagnor ( 4 seater )"
                  price="10/km"
                />
              </div>
            </div>
          </div>
          {/* Why Choose Us */}
          <div className="container mt-5 p-3">
            <div className="row">
              <div className="col-lg-6">
                <h1 className=" big-headers text-dark mb-3">Why choose us</h1>
                <br />
                <h2 className="sub-headers">Safety First :</h2>
                <p className="fw-bolder">
                  Your safety is our top priority. All our vehicles undergo
                  regular maintenance and safety checks to ensure worry-free
                  travel.
                </p>
                <h2 className="sub-headers">Professional Drivers :</h2>
                <p className="fw-bolder">
                  Our experienced and courteous drivers are committed to
                  providing you with a smooth and pleasant journey.
                </p>
                <h2 className="sub-headers">Wide Range of Vehicles :</h2>
                <p className="fw-bolder">
                  From compact cars to spacious SUVs, we offer a diverse range
                  of vehicles to suit your preferences and group size.
                </p>
                <h2 className="sub-headers">Affordable Pricing :</h2>
                <p className="fw-bolder">
                  We believe that travel should be accessible to all. Our
                  competitive pricing ensures that you get the best value for
                  your money.
                </p>
                <h2 className="sub-headers">Easy Booking :</h2>
                <p className="fw-bolder">
                  Booking a trip with TRIPTO is simple and hassle-free. Our
                  user-friendly online platform and responsive customer support
                  make the process a breeze.
                </p>
                <h2 className="sub-headers">Customer Satisfaction :</h2>
                <p className="fw-bolder">
                  We take pride in the smiles we've put on our customers' faces.
                  Your satisfaction is our motivation.
                </p>
                <br />
                <a
                  href="#book-your-ride"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn btn-lg blue-buttons">
                    Book Your Cab
                  </button>
                </a>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid object-fit-cover cars_2"
                  src="/Images/2-Cars-bgless.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services  */}
      <section id="our-services">
        <div className="container-fluid p-0 m-0">
          {/* <img className="img-fluid services-bg" src="/Images/BG.png" alt="" /> */}
          <div className="container ">
            <div className="container text-center mt-4">
              <h1 className="big-headers">Tripto</h1>
              <h3 className="sub-headers">Our Services</h3>
            </div>

            <div className="row service-row">
              <div className="col-lg-4">
                <Cards
                  icon="fa-solid fa-ticket fa-2xl"
                  header="Outstation booking"
                  para="We help you for execution of pending plans with flexible schedule, we offer you the best hassle- free booking"
                />
              </div>
              <div className="col-lg-4">
                <Cards
                  icon="fa-solid fa-route fa-2xl"
                  header="Route management"
                  para="We help you to explorer more places along the route with the proper expertise of the location"
                />
              </div>
              <div className="col-lg-4">
                <Cards
                  icon="fa-solid fa-car fa-2xl"
                  header="Flexible Travel"
                  para="Tripto allows you to extend the trip as per passenger need, you can travel off route according to you, we gave priority to your energetic mood swing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Ride */}
      <section id="book-your-ride">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-5 book-your-cab-container">
              <h2 className="sub-headers mb-3">Offices</h2>
              <br />
              <h3 className="sub-headers">Head Office</h3>
              <p>Ghatkopar west, Mumbai :- 400086 Maharashtra</p>
              <br />
              <h2 className="fs-4">MUMBAI</h2>
              <br />
              <h2 className="fs-4">Email: triptotours.com@gmail.com</h2>
              <br />
              <h2 className="fs-4">Phone: +91 9372704624</h2>
            </div>
            <div className="col-lg-6 p-5 book-your-cab-container">
              <h2 className="big-headers">Book Your Cab</h2>
              <h3 className="sub-headers">Tripto</h3>
              <BookYourCabForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
