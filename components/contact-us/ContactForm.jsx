"use client";

import { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// reCAPTCHA Site Key
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const ContactForm = () => {
  // reCAPTCHA widget reference
  const recaptchaWidgetId = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  // UI states
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [responseType, setResponseType] = useState("");
  const [recaptchaError, setRecaptchaError] = useState("");

  // Load Google reCAPTCHA Script
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !RECAPTCHA_SITE_KEY
    )
      return;
  
    // Prevent duplicate script
    const existingScript = document.querySelector(
      'script[src*="recaptcha/api.js"]'
    );
  
    const renderCaptcha = () => {
      if (
        window.grecaptcha &&
        window.grecaptcha.render &&
        !recaptchaWidgetId.current
      ) {
        recaptchaWidgetId.current =
          window.grecaptcha.render(
            "recaptcha-container",
            {
              sitekey: RECAPTCHA_SITE_KEY,
            }
          );
      }
    };
  
    // If already fully loaded
    if (
      window.grecaptcha &&
      window.grecaptcha.render
    ) {
      renderCaptcha();
      return;
    }
  
    // Global callback
    window.onloadCallback = () => {
      renderCaptcha();
    };
  
    // Load script once
    if (!existingScript) {
      const script = document.createElement("script");
  
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit";
  
      script.async = true;
      script.defer = true;
  
      document.body.appendChild(script);
    }
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedValue =
      name === "phone"
        ? value.replace(/\D/g, "")
        : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  // Get Captcha Token
  const getRecaptchaToken = () => {
    if (
      typeof window === "undefined" ||
      !window.grecaptcha
    ) {
      return null;
    }

    return window.grecaptcha.getResponse(
      recaptchaWidgetId.current
    );
  };

  // Reset Captcha
  const resetRecaptcha = () => {
    if (
      typeof window !== "undefined" &&
      window.grecaptcha
    ) {
      window.grecaptcha.reset(
        recaptchaWidgetId.current
      );
    }
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponseMsg("");
    setResponseType("");
    setRecaptchaError("");

    try {
      // Get captcha token
      const token = getRecaptchaToken();

      // If captcha not checked
      if (!token) {
        setRecaptchaError(
          "Please complete the reCAPTCHA verification."
        );

        setLoading(false);
        return;
      }

      // Verify captcha
      const verifyRes = await fetch(
        "/api/verify-recaptcha",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );

      const verifyData =
        await verifyRes.json();

      // Verification failed
      if (!verifyData.success) {
        setRecaptchaError(
          verifyData.error ||
            "reCAPTCHA verification failed"
        );

        resetRecaptcha();

        setLoading(false);
        return;
      }

      // Create CF7 Form
      const form = new FormData();

      // REQUIRED CF7 hidden fields
      form.append("_wpcf7", "6");

      form.append(
        "_wpcf7_unit_tag",
        "wpcf7-f6-p0-o1"
      );

      // Form fields
      form.append(
        "your-name",
        formData.name
      );

      form.append(
        "your-email",
        formData.email
      );

      form.append(
        "your-company",
        formData.company
      );

      form.append(
        "your-phone",
        formData.phone.startsWith("+")
          ? formData.phone
          : `+${formData.phone}`
      );

      form.append(
        "your-message",
        formData.message
      );

      // Submit CF7
      const res = await fetch(
        "https://docs.tejasmaritime.com/wp-json/contact-form-7/v1/contact-forms/6/feedback",
        {
          method: "POST",
          body: form,
        }
      );

      const data = await res.json();

      console.log("CF7 Response:", data);

      // Success
      if (data.status === "mail_sent") {
        setResponseMsg(
          "Message sent successfully!"
        );

        setResponseType("success");

        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });

        // Reset captcha
        resetRecaptcha();
      }

      // Validation failed
      else if (
        data.status === "validation_failed"
      ) {
        setResponseMsg(
          "Please fill all required fields correctly."
        );

        setResponseType("error");
      }

      // Other errors
      else {
        setResponseMsg(
          data.message ||
            "Failed to send message."
        );

        setResponseType("error");
      }
    } catch (error) {
      console.error(error);

      setResponseMsg(
        "Something went wrong."
      );

      setResponseType("error");
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-blue mb-2">
        Send Us a Message
      </h2>

      <p className="text-sm text-blue italic mb-6">
        (Our team typically responds within one business day.)
      </p>

      {/* Form */}
      <form
        className="space-y-5"
        onSubmit={handleSubmit}
      >
        {/* Full Name */}
        <div>
          <label className="text-sm text-red font-semibold">
            Full Name*
          </label>

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
          <label className="text-sm text-red font-semibold">
            Email Address*
          </label>

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
          <label className="text-sm text-red font-semibold">
            Phone Number*
          </label>

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
          <label className="text-sm text-red font-semibold">
            Your message
          </label>

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-[#A30133]"
          ></textarea>
        </div>

        {/* reCAPTCHA */}
        <div className="pt-2">
          <div id="recaptcha-container"></div>
        </div>

        {/* reCAPTCHA Error */}
        {recaptchaError && (
          <p className="text-red-600 text-sm">
            {recaptchaError}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="shine-btn red-gradient-btn text-white px-6 py-3 rounded-full text-xs sm:text-sm uppercase text-center w-fit"
        >
          {loading
            ? "Sending..."
            : "Submit"}
        </button>

        {/* Response */}
        {responseMsg && (
          <p
            className={`text-sm mt-2 ${
              responseType === "success"
                ? "text-green-600"
                : "text-red-600"
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