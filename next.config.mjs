/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Change to 'http' if your images are served over HTTP
        hostname: "bg-so-1.zippyimage.com",
        port: "", // You can specify a port if needed, otherwise leave it as an empty string
        pathname: "/**", // Matches any path
      },
      {
        protocol: "https", // Change to 'http' if your images are served over HTTP
        hostname: "via.placeholder.com",
        port: "", // You can specify a port if needed, otherwise leave it as an empty string
        pathname: "/**", // Matches any path
      },
    ],
  },
};

export default nextConfig;
