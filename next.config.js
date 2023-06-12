/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  // i18n: {
  //   defaultLocale: "mn",
  //   locales: ["en", "mn"],
  // },
  images: {
    domains: [],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  redirects: async () => {
    return [
      {
        source: "/mn",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mn/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/:locale(en|mn)",
          destination: "/:locale/dashboard",
        },
        {
          source: "/:locale(en|mn)/parts",
          destination: "/:locale/parts/stocks",
        },
      ],
    };
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
