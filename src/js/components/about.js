const data = require('../../data/work-history.json');

const About = () => `
<section id="about" class="about">
  <div class="container">
    ${data.map((entry) => (
      `<div class="gig">
          <div class="gig__img">
            <img src="img/${entry.id}.png" />
          </div>
          <h2>${entry.name}</h2>
          <span class="gig__year">${entry.year}</span>
          <span class="gig__headline">${entry.headline}</span>
        </div>`
      )).join('')}
  </div>
</section>
`;

exports.default = About();