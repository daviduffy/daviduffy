const htmlTemplate = require('./src/index.html.js').default;
const About = require('./src/js/components/about').default;

console.log(htmlTemplate);

const text = htmlTemplate.replace('{{  }}')