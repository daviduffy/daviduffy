<header class="OffCanvas__head">
  <div class="OffCanvas__wordmark">
    <a class='a a--menu' href='/'>
      <?php include '_nove_logo_wordmark.php'; ?>
    </a>
  </div>
  <button class="OffCanvas__trg svg-b" title="close">
    <svg class="Header__ic Header__ic--t" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.07 70.07"><defs><style>.__t{fill:none;stroke:var(--medium-gray);stroke-miterlimit:10;stroke-width:10px;}</style></defs><line class="__t" x1="3.54" y1="3.54" x2="66.54" y2="66.54"/><line class="__t" x1="66.54" y1="3.54" x2="3.54" y2="66.54"/></svg>
</button>
</header>
<nav class="Header__nav Header__nav--offcanvas">
  <ul>
    <?php create_menu_links($data_menu_primary); ?>
    <?php create_menu_links($data_menu_secondary); ?>
  </ul>
</nav>