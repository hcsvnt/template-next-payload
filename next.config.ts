import { withPayload } from '@payloadcms/next/withPayload';
import initializeBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { pipe } from 'effect';

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
});

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
    // Your Next.js config here
    // pageExtensions: ['mdx', 'ts', 'tsx'] // uncomment to add support for MDX,
    // but needs withMDX plugin
};

export default pipe(nextConfig, withPayload, withBundleAnalyzer, withVanillaExtract);
