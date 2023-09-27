import React, { useState } from "react";

const BookYourCabForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value;

    const numericInput = input.replace(/\D/g, "");

    const truncatedInput = numericInput.slice(0, 10);

    setPhoneNumber(truncatedInput);
  };

  return (
    <>
      <form
        className="mx-auto contact-form my-4"
        action="https://formspree.io/f/xjvqalpl"
        method="post"
      >
        <input
          className="form-control my-4"
          type="text"
          name="name"
          placeholder="Enter Your Full Name"
          required
        />
        <input
          className="form-control mb-4"
          type="number"
          name="phoneNo"
          inputMode="tel"
          placeholder="Enter Your Phone No."
          value={phoneNumber}
          onChange={handleInputChange}
        />
        <input
          className="form-control my-4"
          type="text"
          name="pickupLocation"
          placeholder="Picup Location"
          required
        />
        <input
          className="form-control my-4"
          type="text"
          name="dropLocation"
          placeholder="Drop Location"
          required
        />
        <button className="btn btn-lg blue-buttons my-4" type="submit">
          Book Your Cab
        </button>
      </form>
    </>
  );
};

export default BookYourCabForm;
