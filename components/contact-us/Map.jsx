"use client";

import { FiExternalLink, FiMapPin } from "react-icons/fi";

const MapSection = () => {
  return (
    <div className="relative w-full h-[340px] md:h-[520px] overflow-hidden shadow-xl group">

      {/* MAP */}
      <iframe
        src="https://www.google.com/maps?q=19.0150708,73.0385057&z=15&output=embed&hl=en"
        className="w-full h-full border-0 transition-all duration-700 ease-out 
                   group-hover:scale-105 group-hover:brightness-110"
        loading="lazy"
      />

      {/* HIDE GOOGLE DEFAULT CTA (TOP LEFT) */}
      <div className="absolute top-0 left-0 w-[130px] h-[70px] z-10 bg-transparent" />

      {/* OVERLAY GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120B3F]/40 via-transparent to-transparent" />

      {/* TOP BORDER GLOW */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5FD4FF] to-transparent opacity-60" />

      {/* LOCATION CARD */}
      <div className="absolute bottom-5 left-5 right-5 md:right-auto md:max-w-sm 
                      bg-white/85 backdrop-blur-md border border-white/40
                      rounded-xl px-4 py-3 shadow-lg flex items-start gap-3 z-20">

        <FiMapPin className="text-[#120B3F] mt-1 shrink-0 w-5 h-5" />

        <div>
          <p className="text-sm font-semibold text-gray-900">
            Tejas Maritime Pvt. Ltd.
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            CBD Belapur, Navi Mumbai, India
          </p>
        </div>
      </div>

      {/* YOUR CTA BUTTON */}
      <a
        href="https://www.google.com/maps?q=19.0150708,73.0385057"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-5 right-5 z-20 flex items-center gap-2 
                   bg-white text-[#120B3F] text-sm font-semibold
                   px-4 py-2 rounded-full shadow-md 
                   hover:bg-gray-100 hover:scale-105 transition-all duration-300"
      >
        View Map
        <FiExternalLink size={14} />
      </a>

      {/* SUBTLE LIGHT EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(95,212,255,0.12),transparent_70%)]" />
      </div>

    </div>
  );
};

export default MapSection;