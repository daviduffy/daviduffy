const htmlTemplate = require('./src/index.html.js').default;
const Menu = require('./src/js/components/Menu').default;
const Offcanvas = require('./src/js/components/Offcanvas').default;
const Header = require('./src/js/components/Header').default;
const About = require('./src/js/components/About').default;
const Portfolio = require('./src/js/components/Portfolio').default;
const Contact = require('./src/js/components/Contact').default;
const Splash = require('./src/js/components/Splash').default;

const prod = process.env.NODE_ENV === 'production';

const html = htmlTemplate
  .replace('{{ Menu }}', Menu)
  .replace('{{ Offcanvas }}', Offcanvas)
  .replace('{{ Header }}', Header)
  //.replace('{{ About }}', About)
  .replace('{{ Portfolio }}', Portfolio)
  .replace('{{ Contact }}', Contact)
  .replace('{{ Splash }}', Splash);

const minifiedHtml = html.replace(/>\s+</g, '><');

exports.default = prod ? minifiedHtml : html;
