import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: "_next",
    output: "standalone",
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    reactStrictMode: false,
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    }
})

export default withMDX(nextConfig)
