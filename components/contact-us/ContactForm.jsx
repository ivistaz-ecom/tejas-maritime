"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [responseType, setResponseType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "phone" ? value.replace(/\D/g, "") : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    setResponseType("");
  
    try {
      const form = new FormData();
  
      // ✅ REQUIRED CF7 hidden fields
      form.append("_wpcf7", "6"); // form ID
      form.append("_wpcf7_unit_tag", "wpcf7-f6-p0-o1");
  
      // ✅ Your fields (already correct)
      form.append("your-name", formData.name);
      form.append("your-email", formData.email);
      form.append("your-company", formData.company);
      form.append("your-phone", formData.phone.startsWith("+") ? formData.phone : `+${formData.phone}`);
      form.append("your-message", formData.message);
  
      const res = await fetch(
        "https://docs.tejasmaritime.com/wp-json/contact-form-7/v1/contact-forms/6/feedback",
        {
          method: "POST",
          body: form,
        }
      );
  
      const data = await res.json();
      console.log("CF7 Response:", data);
  
      if (data.status === "mail_sent") {
        setResponseMsg("Message sent successfully!");
        setResponseType("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else if (data.status === "validation_failed") {
        setResponseMsg("Please fill all required fields correctly.");
        setResponseType("error");
      } else {
        setResponseMsg(data.message || "Failed to send message.");
        setResponseType("error");
      }
    } catch (error) {
      console.error(error);
      setResponseMsg("Something went wrong.");
      setResponseType("error");
    }
  
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-2">
        Send Us a Message
      </h2>

      <p className="text-sm text-[#4a3fb3] italic mb-6">
        (Our team typically responds within one business day.)
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>

        {/* Full Name */}
        <div>
          <label className="text-sm text-red font-semibold">Full Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-[#A30133]"
            required
          />
        </div>

        {/* Company */}
        <div>
          <label className="text-sm text-red font-semibold">
            Company / Organisation*
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-[#A30133]"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-red font-semibold">Email Address*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-[#A30133]"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm text-red font-semibold">Phone Number*</label>
          <div className="mt-2">
            <PhoneInput
              country="in"
              value={formData.phone}
              onChange={(value) =>
                setFormData({
                  ...formData,
                  phone: value,
                })
              }
              inputProps={{
                name: "phone",
                required: true,
              }}
              containerClass="w-full"
              inputClass="!w-full !h-[50px] !pl-14 !rounded-md !bg-gray-200 !border-0 focus:!ring-2 focus:!ring-[#A30133]"
              buttonClass="!border-0 !bg-gray-200 !rounded-l-md"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-red font-semibold">Your message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-[#A30133]"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="shine-btn red-gradient-btn text-white px-6 py-3 rounded-full text-xs sm:text-sm uppercase text-center w-full sm:w-auto"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {/* Response */}
        {responseMsg && (
          <p
            className={`text-sm mt-2 ${
              responseType === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {responseMsg}
          </p>
        )}

      </form>
    </div>
  );
};

export default ContactForm;