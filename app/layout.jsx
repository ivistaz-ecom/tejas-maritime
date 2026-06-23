import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Raleway } from "next/font/google";
import Script from "next/script";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

/* ================= SEO METADATA ================= */
export const metadata = {
  metadataBase: new URL("https://www.tejasmaritime.com"),

  title: {
    default: "Tejas Maritime | Maritime Technical Management & Crew Management Services",
    // template: "%s | Tejas Maritime",
  },

  description:
    "Tejas Maritime provides maritime technical management, ship crew management, naval architecture services, marine surveys, and ship design & construction solutions for commercial vessels worldwide.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Tejas Maritime | Maritime Technical Management & Crew Management Services",
    description:
      "Tejas Maritime provides maritime technical management, ship crew management, naval architecture services, marine surveys, and ship design & construction solutions for commercial vessels worldwide.",
    url: "https://www.tejasmaritime.com",
    siteName: "Tejas Maritime",
    images: [
      {
        url: "/og-images/home_og.png", // 👉 put inside public Image Size: 1200 × 630/
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tejas Maritime",
    description: "Precision maritime solutions",
    images: ["/og-image.jpg"],
  },
};

/* ================= LAYOUT ================= */
const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={raleway.variable}>
      <body>

        {/* ================= Google Tag Manager ================= */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PQNWN786');
          `}
        </Script>

        {/* ================= Google Tag Manager (noscript) ================= */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQNWN786"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ================= SCHEMA ORG ================= */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",

              name: "Tejas Maritime Pvt. Ltd.",

              url: "https://www.tejasmaritime.com",

              logo: "https://www.tejasmaritime.com/logo.png",

              description:
                "Tejas Maritime provides maritime technical management, ship crew management, naval architecture services, marine surveys, and ship design & construction solutions for commercial vessels worldwide.",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Navi Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "India",
              },

              sameAs: [
                "https://www.linkedin.com/company/tejas-maritime"
              ],
            }),
          }}
        />

        {/* ================= SITE ================= */}
        <Header />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  );
};

export default RootLayout;