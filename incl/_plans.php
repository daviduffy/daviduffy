<?php
  // data array
  include '_data_plans.php';
?>
<section class="section section--super-narrow">
  <ul class="Plans">
    <li class="Plan Plan--free" id="plan_0">
      <div class="Plan__img-c">
        <?php include '_plan_sprout.php'; ?>
      </div>
      <?php create_plan_details($data_plan_free); ?>
    </li>
    <li class="Plan Plan--monthly" id="plan_1">
      <div class="Plan__img-c">
        <?php include '_plan_tree_sm.php'; ?>
      </div>
      <?php create_plan_details($data_plan_paid_1); ?>
    </li>
    <li class="Plan Plan--yearly" id="plan_2">
      <div class="Plan__img-c">
        <?php include '_plan_tree_lg.php'; ?>
      </div>
      <?php create_plan_details($data_plan_paid_2); ?>
    </li>
  </ul>
</section>
