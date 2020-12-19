<!doctype html> 
<html lang="en">
  <head>
    <?php include '_about.php'; ?>
  </head>
  <body class="splash">
    <div class="off-canvas-wrapper">
      <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>

        <!-- off-canvas title bar for 'small' screen -->
        <style>
          @media only screen and (max-width:39.98em){
            .title-bar {display:none;}
          }
        </style>
        <div class="title-bar" data-responsive-toggle="offCanvasLeft" data-hide-for="medium">
          <div class="title-bar-right">
            <?php 
            // <span><a href="#splash">
            //   <span class="lettermark">D</span>
            //   <span class="lettermark">D</span>
            // </a></span>
            ?>
             

          </div>
          
          <div class="title-bar-left">
            <button class="menu-icon" type="button" data-toggle="offCanvasLeft"></button>
            <h1 class="comment about">about</h1>
            <h1 class="comment portfolio">portfolio</h1>
            <h1 class="comment contact">contact</h1>
          </div>
        </div>

        <!-- off-canvas right menu -->
        <div class="off-canvas position-left" id="offCanvasLeft" data-off-canvas data-position="left">
          <ul class="vertical dropdown menu" data-dropdown-menu>
            <li class="show-for-small-only"><a href="#splash">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <!-- "wider" top-bar menu for 'medium' and up -->
        <div id="widemenu" class="top-bar show-for-medium">
          <div class="row">
            <div class="top-bar-left">
              <ul class="menu">
                <li><a href="#splash"><span>David </span>Duffy</a></li>
              </ul>
            </div>
            <div class="top-bar-right">
              <ul class="dropdown menu" data-dropdown-menu>
                <li><a class="nav-underline <?php if ($pageTitle == 'About') echo 'active'; ?>" href="#about">About</a></li>
                <li><a class="nav-underline <?php if ($pageTitle == 'Portfolio') echo 'active'; ?>" href="#portfolio">Portfolio</a></li>
                <li><a class="nav-underline <?php if ($pageTitle == 'Contact') echo 'active'; ?>" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- page content goes in this container -->
        <?php if ($pageTitle): ?>
        <div class="off-canvas-content body-content <?php echo $pageTitle?> clearfix" data-off-canvas-content>
          <div class="row heading">
            <div class="column">
              <p class="small-12 blurb columns">
                <span><?php echo $pageBlurb ?></span>
              </p>
            </div>
          </div>
          <?php endif ?>