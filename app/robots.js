export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    //   sitemap: "https://www.tejasmaritime.com/sitemap.xml",
      sitemap: "http://localhost:3000/sitemap.xml",
    };
  }