<?php
  $con=new mysqli("localhost","root", "","db_order");
  $tisch= $_POST["tisch"];
  $gericht = $_POST["gericht"];
//  $date = $_POST["date"];
  $sql="INSERT INTO orders (tisch, gericht) VALUES ('$tisch','$gericht' )";
  //mysqli_query($con,$sql);
  if($con->query($sql)){
    echo "Data Saved";
  }
  else{
    echo "d";
  }
?>
