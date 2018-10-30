      <div class="footer">
        <div class="footer__credits">
          <span>&copy;</span><span>&nbsp;Nove.io</span>
        </div>
        <div class="footer__business-garbage">
          <a class="h6" href="/terms">Terms and Conditions</a>
          <span class="h6">&nbsp;|&nbsp;</span>
          <a class="h6" href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </main>
    <script src="<?php echo $pathModifier; ?>js/output.min.js"></script>
    <script>
      // scroll.init();
      <?php
        if (isset($footerScript)) {
          echo "$footerScript";
        }
      ?>
    </script>
  </body>
</html>
