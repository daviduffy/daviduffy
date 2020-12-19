const data = require('../../data/work-history.json');

const About = () => `
  ${data.map((entry) => (
    `<div>
        <div>
          <img src="img/${entry.id}.png">
        </div>
        <div class="img-fill">
        </div>
      </div>
      <div>
        <h2>${entry.name}</h2>
        <span class="year">${entry.year}</span>
        ${entry.text.map((line) => `<p>${line}</p>`).join('')}
      </div>`
    )).join('')}
`;

exports.default = About();