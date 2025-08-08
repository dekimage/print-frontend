const withImages = require("next-images");

module.exports = withImages({
  images: {
    disableStaticImages: true,
    domains: ["static.wikia.nocookie.net", "picsum.photos"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
});
