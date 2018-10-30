<?php 
  include '_data_plans.php';
  include '_data_features.php';
?>
<section class="section section--super-narrow">
  <ul class="Features">
    <?php create_feature_heading($data_plan_names); ?>
    <?php create_feature_grid($data_features); ?>
  </ul>
</section>