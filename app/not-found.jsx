"use client";

import Lottie from "lottie-react";
import shipAnimation from "@/public/lottie/ship-404.json"; // adjust path
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#e9e4d8] px-4 text-center">

      {/* Animation */}
      <div className="w-[280px] sm:w-[350px] md:w-[420px] mb-6">
        <Lottie animationData={shipAnimation} loop />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-serif text-[#1c1c5a] mb-4">
        Lost at Sea?
        {/* Page Not Found */}
      </h1>

      {/* Sub text */}
      <p className="text-gray-600 max-w-md mb-6 text-sm sm:text-base">
        The page you're looking for seems to have drifted away.
        Let’s get you back on course.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="red-gradient-btn text-white px-6 py-3 rounded-full text-xs sm:text-sm uppercase text-center w-full sm:w-auto"
      >
        Back to Home
      </Link>

    </section>
  );
}