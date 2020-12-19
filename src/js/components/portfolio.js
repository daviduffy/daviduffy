const work = require('../../data/work.json');
const play = require('../../data/play.json');

const Portfolio = () => `
  portfolio items: ${work.length}
  doodle items: ${play.length}
`;

exports.default = Portfolio();