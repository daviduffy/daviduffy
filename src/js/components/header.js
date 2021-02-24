const Menu = require('./Menu').default;

const Header = () => `
<header class="h">
  <button class="h__trg oc__trg" style="margin: 0; padding: 0.25rem" title="open">
    <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg svg--h">
      <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
    </svg>
  </button>
  <div class="container">
    <div class="h__menu">
      ${Menu}
    </div>
  </div>
</header>
`;

exports.default = Header();
