module.exports = {
  images: {
    domains: ['d1b929y2mmls08.cloudfront.net', 'i.shgcdn.com'],
  },
  webpack: function webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
