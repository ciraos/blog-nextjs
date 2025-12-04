import type { NextConfig } from "next";
import createMDX from "@next/mdx";

import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  distDir: ".next",
  output: "standalone",
  pageExtensions: ["js", "jsx", 'md', 'mdx', "ts", "tsx"],
  reactCompiler: true,
  reactStrictMode: false
};

const withMMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: []
  }
});

export default withMMDX(nextConfig);
