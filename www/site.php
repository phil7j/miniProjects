<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <?php
    function getMax($num1, $num2, $num3){
        if($num1 > $num2 && $num3 < $num1){
            return $num1;
        }
        elseif ($num1 < $num2 && $num3 < $num2){
            return $num2;
        } else {
            return $num3;
        }

    }
    echo getMax(15,70,16);
    ?>
</body>
</html>