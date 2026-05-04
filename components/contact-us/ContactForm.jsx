"use client";

import Link from 'next/link';

const ContactForm = () => {
  return (
    <div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-2">
        Send Us a Message
      </h2>

      <p className="text-sm text-[#4a3fb3] italic mb-6">
        (Our team typically responds within one business day.)
      </p>

      <form className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="text-sm text-red font-semibold">Full Name*</label>
          <input
            type="text"
            className="w-full mt-2 p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-[#A30133]"
          />
        </div>

        {/* Company */}
        <div>
          <label className="text-sm text-red font-semibold">
            Company / Organisation*
          </label>
          <input
            type="text"
            className="w-full mt-2 p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-[#A30133]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-red font-semibold">Email Address*</label>
          <input
            type="email"
            className="w-full mt-2 p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-[#A30133]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm text-red font-semibold">Phone Number*</label>
          <input
            type="tel"
            className="w-full mt-2 p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-[#A30133]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-red font-semibold">Your message</label>
          <textarea
            rows="4"
            className="w-full mt-2 p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-[#A30133]"
          ></textarea>
        </div>

        {/* Button */}
        <button
        type="submit"
        className="red-gradient-btn text-white px-6 py-3 rounded-full text-xs sm:text-sm uppercase text-center w-full sm:w-auto"
        >
        Submit
        </button>

      </form>
    </div>
  );
};

export default ContactForm;