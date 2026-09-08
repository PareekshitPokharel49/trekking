/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  // Emit a self-contained server bundle in .next/standalone for a small
  // production Docker image (see Dockerfile).
  output: "standalone",
};

export default nextConfig;
