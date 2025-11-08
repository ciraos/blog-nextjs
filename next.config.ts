import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  distDir: ".next",
  output: "standalone",
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  reactCompiler: true,
  reactStrictMode: false
};

export default nextConfig;
