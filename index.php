<?php

$dir = "./json_files_eurotunnel";
$ashe = scandir($dir);
$listephp = [];

foreach($ashe as $file) {
    if(!is_dir("./json_files_eurotunnel/$file"))
    {
        array_push($listephp, $file);
    }
}
?>