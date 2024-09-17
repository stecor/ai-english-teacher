/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'googleusercontent.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'oaidalleapiprodscus.blob.core.windows.net',
          pathname: '**',
        }, {
          protocol: 'https',
          hostname: 'cdn.openai.com',
          pathname: '**',
      },
     
      ]
    },
  }
  
  module.exports = nextConfig