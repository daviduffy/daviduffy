const htmlTemplate = require('./src/index.html.js').default;
const Menu = require('./src/js/components/menu').default;
const Header = require('./src/js/components/header').default;
const About = require('./src/js/components/about').default;
const Portfolio = require('./src/js/components/portfolio').default;
const Contact = require('./src/js/components/contact').default;
const Splash = require('./src/js/components/splash').default;

const prod = process.env.NODE_ENV === 'production';

const html = htmlTemplate
  .replace('{{ menu }}', Menu)
  .replace('{{ header }}', Header)
  .replace('{{ about }}', About)
  .replace('{{ portfolio }}', Portfolio)
  .replace('{{ contact }}', Contact)
  .replace('{{ splash }}', Splash);

const minifiedHtml = html.replace(/>\s+</g, '><');

exports.default = prod ? minifiedHtml : html;
