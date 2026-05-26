import Image from "next/image"

const clients = [
  {
    src: "/home/logos/Tidewater.webp",
    alt: "Tidewater logo",
  },
  {
    src: "/home/logos/TAG-Offshore.webp",
    alt: "TAG Offshore logo",
  },
  {
    src: "/home/logos/ONGC.webp",
    alt: "ONGC logo",
  },
  {
    src: "/home/logos/maldar.webp",
    alt: "Maldar logo",
  },
  {
    src: "/home/logos/greatoff-grp.webp",
    alt: "Greatoff Group logo",
  },
  {
    src: "/home/logos/essar.webp",
    alt: "Essar logo",
  },
  {
    src: "/home/logos/Anglo-eastern.webp",
    alt: "Anglo-Eastern logo",
  },
  {
    src: "/home/logos/Ambuja-Cement.webp",
    alt: "Ambuja Cement logo",
  },
  {
    src: "/home/logos/Adani.webp",
    alt: "Adani logo",
  },
]

const duplicatedClients = [...clients, ...clients]

const ClientsSection = () => {
  return (
    <section className="bg-[#e9e4d8] py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c5a] mb-10 md:mb-16">
          OUR CLIENTS
        </h2>

        {/* Marquee */}
        <div className="overflow-hidden group">
          <div
            className="
              flex w-max
              animate-marquee
              will-change-transform
              group-hover:[animation-play-state:paused]
            "
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.src}-${index}`}
                className="
                  flex items-center justify-center
                  shrink-0
                  w-[140px]
                  sm:w-[180px]
                  md:w-[220px]
                  px-4
                "
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={140}
                  height={80}
                  loading="lazy"
                  className="
                    object-contain
                    h-[55px]
                    sm:h-[75px]
                    md:h-[85px]
                    w-auto
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="
            max-w-6xl mx-auto
            mt-12 md:mt-20
            rounded-2xl md:rounded-3xl
            bg-[#1C6882]
            p-6 sm:p-8 md:p-12
            text-white
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-[35px] font-serif leading-tight">
                Looking for reliable marine safety services and ship supplies?
              </h3>

              <div className="mt-5 space-y-4 text-white leading-7 text-sm sm:text-base">
                <div className="mx-20">
                  <Image
                    src="/home/marintech.png"
                    alt="Marinetech"
                    width={300}
                    height={300}
                    className="md:w-[90%] md:h-[90%] w-full h-full"
                  />
                </div>

                <p>
                  Marinetech Safety &amp; Shipping Corporation is a marine
                  safety and technical services company specializing in vessel
                  compliance, inspection, servicing, and ship supply solutions
                  for the maritime industry.
                </p>
                <p>
                  Their expertise covers lifesaving equipment servicing,
                  firefighting systems, navigation and communication support,
                  calibration services, audits, inspections, and marine safety
                  product supplies.
                </p>
                <p>
                  With a strong focus on operational reliability and regulatory
                  compliance, they support shipowners and operators with
                  end-to-end marine safety solutions designed to keep vessels
                  safe, compliant, and inspection-ready.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 md:mx-35 mx-20">
                <a
                  href="https://marinetechss.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    red-gradient-btn
                    shine-btn
                    px-5 sm:px-6
                    text-center
                    py-3
                    rounded-full
                    text-white
                    text-xs sm:text-sm
                    font-medium
                    w-fit
                  "
                >
                  CONNECT TODAY
                </a>
                {/* <a
                  href="https://marinetechss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    red-gradient-btn
                    shine-btn
                    px-5 sm:px-6
                    text-center
                    py-3
                    rounded-full
                    text-white
                    text-xs sm:text-sm
                    font-medium
                    w-fit
                  "
                >
                  KNOW MORE
                </a> */}
              </div>
            </div>

            <div className="md:mt-3 mt-0">
              <h4 className="text-xl sm:text-2xl font-serif mb-3">
                Their services include:
              </h4>
              <ul className="text-sm sm:text-base text-white">
                <li className="py-3 border-b border-white">
                  Lifeboat &amp; Liferaft Servicing
                </li>
                <li className="py-3 border-b border-white">
                  Fire Fighting Equipment &amp; System Services
                </li>
                <li className="py-3 border-b border-white">
                  GMDSS &amp; Navigation Equipment Support
                </li>
                <li className="py-3 border-b border-white">
                  Calibration &amp; Testing Services
                </li>
                <li className="py-3 border-b border-white">
                  Cargo Gear Load Testing
                </li>
                <li className="py-3 border-b borde  r-[#d9a7af]">
                  Gas Detection Services
                </li>
                <li className="py-3 border-b border-white">BWMS Support</li>
                <li className="py-3 border-b border-white">
                  Flag Surveys &amp; Audit Inspections
                </li>
                <li className="py-3 border-b border-white">
                  Marine Safety Equipment Supply
                </li>
                <li className="pt-3">General Ship Supply Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
