const projects = require('../../data/projects.json');
const play = require('../../data/play.json');

const Portfolio = () => `
<section id="portfolio" class="portfolio">
  <div class="container">
    <h2 class="h2 h#--f">Projects</h2>
    <div class="portfolio__content">
      ${projects.map((entry, index) => (
          `<div class="p-card p-card--${index + 1}">
              <div class="p-card__image" style="background-image: url('${entry.img}')"></div>
              <div class="p-card__underline"><span>&nbsp;</span></div>
              <div class="p-card__title">
                <span>${entry.name}</span>
              </div>
              <div class="p-card__box"><span>&nbsp;</span></div>
              <a class="p-card__description" target="_blank" href="${entry.url}">
                <span class="span">
                  ${entry.content}
                  <hr />
                  ${entry.tech}
                </span>
              </a>
          </div>`
        )).join('')}
    </div>
    <h2 class="h2 h#--f">Doodles</h2>
    <div class="portfolio__content">
      doodle items: ${play.length}
    </div>
  </div>
</section>`;

exports.default = Portfolio();