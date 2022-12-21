/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
/*   rewrites :{
    source: '/api/:Fruta*',
    destination: '<http://localhost:5000/:Fruta*>'
  }, */
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'pt-br'],
    defaultLocale: 'pt-br',
  },
  ...nextConfig
}

