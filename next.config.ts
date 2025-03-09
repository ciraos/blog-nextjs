import type { NextConfig } from "next";

const withMDX = require('@next/mdx')()

const nextConfig: NextConfig = {
  distDir: "_next",
  output: "standalone",
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: false
};

export default withMDX(nextConfig);
