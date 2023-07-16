import React from 'react';
import './c-form.css';
const ContactForm = () => {
  return (
    <div className="c-form">
      <form action="" className=" ">
        {/* <div className="input_div">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            className="form-control"
            placeholder="Name"
          />
        </div> */}
        <div className="input_div d-flex gap-3 justify-content-between mb-4">
          <div className="w-100">
            <input
              type="email"
              id="email"
              name="email"
              className="w-100 form-control   "
              placeholder="Email"
            />
          </div>
          <div className="w-100">
            <input
              type="number'"
              id="number"
              name="number"
              className="w-100 form-control  "
              placeholder="Number"
            />
          </div>
        </div>
        <div className="input_div d-flex gap-3 justify-content-between mb-4">
          <div className="w-100">
            <input
              type="email"
              id="email"
              name="email"
              className="w-100 form-control   "
              placeholder="Email"
            />
          </div>
          <div className="w-100">
            <input
              type="number'"
              id="number"
              name="number"
              className="w-100 form-control  "
              placeholder="Number"
            />
          </div>
        </div>
        <div className="textarea ">
          <textarea
            name=""
            id=""
            className="form-control text_area"
            placeholder="Your text"
            cols="30"
            rows="6"
          ></textarea>
        </div>
        <div className=" mt-2 mx-auto ">
          <button type="sumit" className="rounded-pill    btn   ">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
