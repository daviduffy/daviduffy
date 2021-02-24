const data = require('../../data/work-history.json');

const Contact = () => `
<section id="contact" class="contact">
  <div class="container">
    <!-- contact content -->
    <div id='nove_signup'></div>
    <script src='https://nove.io/v4/nove.js'></script>
    <script>
      var Instance = Lumin.default.widgets.signUp.new();
      Instance.render({
        userID: 'j4AQDctxaOhTkf1T70k5J8LHiNp2',
        formID: '723dd95e-3332-4403-8c57-e6627065fd92'
      });
    </script>
  </div>
</section>
`;

exports.default = Contact();