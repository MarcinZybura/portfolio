<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nauka szybkiego pisania</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
</head>

<body>
    <div class="timer">
        <span>Time:
            <span id="timer"></span>
            <span>s</span>
        </span>

    </div>

    <div class="container">
        <div class="quote-display" id="quoteDisplay"><?php
                                                        require 'dbconnect.php';
                                                        // Create connection
                                                        $conn = new mysqli($servername, $username, $password, $dbname);

                                                        if ($conn->connect_error) {
                                                            die("Connection failed: " . $conn->connect_error);
                                                        }
                                                        $sql = "SELECT tresc FROM teksty ORDER BY RAND() LIMIT 1";
                                                        $result = $conn->query($sql);
                                                        if ($result->num_rows > 0) {
                                                            while ($row = $result->fetch_assoc()) {
                                                                echo $row["tresc"];
                                                            }
                                                        } else {
                                                            echo "0 results";
                                                        }
                                                        $conn->close();
                                                        ?></div>
        <textarea class="quote-input" id="quoteInput" autofocus></textarea>
    </div>


    <script src="script.js"></script>
</body>

</html>