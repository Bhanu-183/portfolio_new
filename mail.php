<?php
if (isset($_POST['submit'])) {
    $to = "bhanukrishnaprasad3333@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = "Portfolio Response";
    $message = $name . "\nSubject : " . $subject . " \nMessege:" . "\n" . $_POST['message'];
    $headers = "From:" . $from;

    mail($to, $subject, $message, $headers);

?>
    <script>
        alert("Your message has been sent");
        location.replace("./index.html");
    </script>
<?php } ?>