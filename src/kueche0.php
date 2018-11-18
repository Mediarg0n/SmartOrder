<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Küchenansicht</title>
    <link rel="stylesheet" href="css/style_kueche.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

  </head>
  <body>
<!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Küchenansicht</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="kueche0.php">Noch Offen<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="kueche1.php">Abgeschlossen</a>
      </li>



        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

<?php
$host='localhost';
$user='root';
$pw='';
$database='db_order';

    $db = new mysqli($host, $user, $pw, $database);
    $sql="SELECT * FROM orders WHERE status = 1";

    $db_erg = mysqli_query( $db, $sql );

    if ( ! $db_erg )
    {
      die('Ungültige Abfrage: ' . mysqli_error());
    }

    while ($zeile = mysqli_fetch_array($db_erg))
    {

        ?>
            <div id="div<?php echo $zeile['id']?>" class="feld">
            <p>Tisch Nr. : <?php echo $zeile['tisch']?></p>
            <p>Bestellung Nr. : <?php echo $zeile['id']?></p>
            <p>Gericht : <?php echo $zeile['gericht']?></p>
            <p>Bestellzeitpunkt <?php echo $zeile['date']?></p>
            <button id="b<?php echo $zeile['id']?>">Bestellung ist fertig</button>
            </div>

    <script>
    $(document).ready(function(){
        $("#b<?php echo $zeile['id']?>").click(function(){
            $("#div<?php echo $zeile['id']?>").remove();
    		$("#b<?php echo $zeile['id']?>").remove();
                $(<?php $update = mysqli_query($db, "UPDATE orders SET status =0" )?>)
        });
    });
    </script>

<?php
}

    mysqli_free_result( $db_erg );
    ?>

  </body>
</html>
