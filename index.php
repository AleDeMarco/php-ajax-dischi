<?php
  include 'db.php';
?>

<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Music player</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
      <div class="container">
          <img src="logo.png" alt="logo">
      </div>
      <select>
        <option value="All">
          All
        </option>
      </select>
  </header>
  <div class="cds-container container">
    <?php foreach ($database as $cd) { ?>
      <div class="cd">
        <img src="<?php echo $cd['poster'] ?>" alt="Poster">
        <h3><?php echo $cd['name'] ?></h3>
        <span class="author"><?php echo $cd['singer'] ?></span>
        <span class="year"><?php echo $cd['year'] ?></span>
      </div>
    <?php } ?>
  </div>

  <script src="js/script.js" charset="utf-8"></script>
</body>
</html>
