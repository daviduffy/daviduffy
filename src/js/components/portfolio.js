const projects = require('../../data/projects.json');
const play = require('../../data/play.json');

const Portfolio = () => `
<section id="portfolio" class="portfolio">
  <div class="container">
    <h2 class="h2 h#--f">Projects</h2>
    <div class="portfolio__content portfolio__content--work">
      ${projects.map((entry, index) => (
        `<div class="p-card p-card--${index + 1}">
            <div class="p-card__image" data-bg="${entry.img}"></div>
            <div class="p-card__underline"><span>&nbsp;</span></div>
            <div class="p-card__title">
              <span>${entry.name}</span>
            </div>
            <div class="p-card__box"><span>&nbsp;</span></div>
            <a class="p-card__description" target="_blank" href="${entry.url}" rel="noopener">
              <span class="span">
                ${entry.content}
                <hr />
                ${entry.tech}
              </span>
            </a>
        </div>`
        )).join('')}
    </div>
    <h2 class="h2 h#--f">Code Doodles</h2>
    <div class="portfolio__content portfolio__content--doodles">
      ${play.map((entry, index) => (
        `<a class="d-card" target="_blank" href="${entry.url}" rel="noopener">
          <div class="d-card__img" data-bg="${entry.image}">
            <div class="d-card__title h#--f h5">${entry.name}</div>
          </div>
          <div class="d-card__description">
            ${entry.content}
          </div>
        </a>`
      )).join('')}
    </div>
  </div>
</section>`;

exports.default = Portfolio();