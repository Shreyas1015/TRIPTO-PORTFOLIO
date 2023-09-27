import React, { useState } from "react";

const ContactUsForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value;

    const numericInput = input.replace(/\D/g, "");

    const truncatedInput = numericInput.slice(0, 10);

    setPhoneNumber(truncatedInput);
  };

  const onClick = () => {
    window.location.reload();
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
        <textarea
          className="form-control mb-4"
          placeholder="Ask Your Query here..."
          rows={5}
          cols={30}
          name="query"
        />
        <button
          onClick={onClick}
          className="btn btn-lg blue-buttons my-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactUsForm;
