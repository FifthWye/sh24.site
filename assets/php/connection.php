<?php
$con = mysqli_connect('localhost','u0543636_default','62956438Nm','u0543636_default');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
$priceList = mysqli_query($con, "SELECT * FROM priceList");

$priceList_data = array();
while ($row = mysqli_fetch_assoc($result)){
    $priceList_data[] = row;
}

echo json-encode($priceList_data);
