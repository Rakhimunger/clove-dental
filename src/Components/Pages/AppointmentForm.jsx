import React, { useState } from "react";

const AppointmentForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    captcha: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.agree) {
      console.log("Form Submitted:", form);
      alert("Appointment booked!");
    } else {
      alert("Please agree to the terms.");
    }
  };

  return (
    <div className="bg-[#fff9f5] p-5 sm:p-10 rounded-3xl shadow-lg border border-orange-100 max-w-6xl mx-auto my-10 transition-all duration-300">
      <h2 className="text-center text-xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
        Book an Appointment With Clove Dentist in Delhi
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-center justify-center"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full sm:flex-1 border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-full px-5 py-2.5 transition duration-200 outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full sm:flex-1 border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-full px-5 py-2.5 transition duration-200 outline-none"
        />
        <div className="w-full sm:w-auto relative">
          <input
            type="text"
            name="captcha"
            placeholder="Captcha"
            value={form.captcha}
            onChange={handleChange}
            className="w-full sm:min-w-[160px] border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-full px-5 py-2.5 pr-20 transition duration-200 outline-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#42210b] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
            1514
          </span>
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-6 py-2.5 rounded-full mt-2 sm:mt-0 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Book Free Consultation
        </button>
      </form>

      <div className="mt-6 text-sm flex items-start max-w-3xl mx-auto">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="mr-2 mt-1 accent-orange-400"
        />
        <p className="text-gray-600 leading-relaxed">
          I agree to CLOVE Dental's{" "}
          <a href="#" className="underline text-gray-800 hover:text-orange-500">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="underline text-gray-800 hover:text-orange-500">
            Privacy Policy
          </a>{" "}
          and consent to contact via phone, email, or SMS.
        </p>
      </div>
    </div>
  );
};

export default AppointmentForm;
