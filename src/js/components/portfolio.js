const work = require('../../data/work.json');
const play = require('../../data/play.json');

const Portfolio = () => `<p>
  portfolio items: ${work.length}
  doodle items: ${play.length}
</p>`;

exports.default = Portfolio();