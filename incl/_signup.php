<div id='nove_signup_main'></div>
<script>
  var Instance = Lumin.default.widgets.signUp.new();
  Instance.render({
    userID: 'HZV4GVidAWX0LmJtLUhZBd4vKKj2',
    selector: '#nove_signup_main',
    types: [
      'ENGAGEMENT',
      'WEDDING',
      'MATERNITY'
    ],
    customAttributes: {
      name: {
        label: '',
        placeholder: 'Your Name'
      },
      email: {
        label: ''
      },
      type: {
        active: false,
        label: ''
      },
      eventDate: {
        active: false,
        label: ''
      },
      referralSource: {
        active: false,
        label: ''
      },
      eventVenue: {
        active: false,
        label: ''
      },
      eventLocale: {
        active: false,
        label: ''
      },
      message: {
        active: false,
        label: ''
      }
    },
    styles: {
      borderColor: '#aaaaaa',
      placeholderColor: '#aaaaaa',
      positiveColor: '#2d97db'
    }
  });
</script>
