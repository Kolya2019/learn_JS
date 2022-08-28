<?php
$id = '1kPUdKAYdg9P2V2I08PnWjQObSFK4zFLyvSFBRn6FOpc';
$gid = 0;
$csv = file_get_contents('https://docs.google.com/spreadsheets/d/' . $id . '/export?format=csv&gid=' . $gid);
$csv = explode("\r\n", $csv);
$array = array_map('str_getcsv', $csv);
echo '<pre>';
print_r($array);
https://docs.google.com/spreadsheets/d//edit?usp=sharing
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<a href="https://docs.google.com/spreadsheets/d/1AsRDaGF8Qb6EQGO4Rauw38XBcSsInuTwULX2VmvEWBU/">Sheet</a>
</body>
</html>