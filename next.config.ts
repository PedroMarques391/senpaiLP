import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/thanks',
        destination: '/thank-you',
        permanent: true,
      },
    ];
  },

};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);


