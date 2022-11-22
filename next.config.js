/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images : {
    domains: ["encrypted-tbn0.gstatic.com" ,"e7.pngegg.com"]
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

export default nextConfig
