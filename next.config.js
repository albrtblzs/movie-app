/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const headers = [
      {
        headers: [
          {
            key: "Cache-Control",
            value:
              "s-maxage=120, stale-while-revalidate",
          },
        ],
        source: "/:path*",
      },
    ];
    return headers;
  },
}

module.exports = nextConfig
