import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  }
};

export default withContentlayer(nextConfig);
