<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="site.php" method="post">
    First Num: <input type="number" name="num1"> <br>
    OP:<input type="text" name="op"> <br>
    Second Num:<input type="number" name="num2"> <br>
        <input type="submit">
    </form>

    <?php
    $num1 = $_POST["num1"];
    $num2 = $_POST["num2"];
    $OP = $_POST["op"];

    if($OP == "+") {
        echo $num1 + $num2;
    } elseif($OP == "-"){
        echo $num1 - $num2;
    } elseif($OP == "*"){
        echo $num1 * $num2;
    } elseif($OP == "/"){
        echo $num1 / $num2;
    } else {
        echo "Invalid Operator";
    }
    ?>
</body>
</html>