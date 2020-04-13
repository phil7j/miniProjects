<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <?php
    $isMale = true;
    $isTall = false;
    if ($isMale && $isTall){
       echo "ITS TRUE! You are a tall man!";
    } elseif($isMale && !$isTall){
        echo "Is a Man but not Tall!";
    } else {
        echo "ITS NOT";
    }
    ?>
</body>
</html>