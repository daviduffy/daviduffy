const data = require('../../data/menu.json');

const Menu = () => `
<ul class="menu">
  ${data
      .filter(({ active }) => active)
      .map((item) => `
    <li><a href="#${item.href}" class="menu__item">${item.id}</a></li>
  `).join('')}
</ul>
`;

exports.default = Menu();
