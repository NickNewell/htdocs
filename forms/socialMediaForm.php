<?php
    $pageTitle = 'Social Media Form';
    $keywords = 'Social';
    $description = 'Social Media Form';
  include $_SERVER['DOCUMENT_ROOT']."/templates/header.php";
?>

    <header class="masthead bg-primary text-center">
        <div class="container" >
            <h1 class="text-uppercase mb-0">Social Media Form</h1>
            <hr class="star-light">
        </div>
    </header>

    <div class="container bg-primary">
        <div class="row">
            <div class="col-lg-8 mx-auto">
            <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
            <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->

            
                <form method="post" action="/forms/formHandler.php">  
                Name: <br>
                <input type="text" name="name" value="">
                <span class="error"></span>
                <br><br>
                E-mail: <br>
                <input type="text" name="email" value="">
                <span class="error"></span>
                <br><br>
                Comment: <br>
                <textarea name="comment" rows="5" cols="40"></textarea>
                <br><br>
                <input type="submit" name="submit" value="Submit">  
                </form>
                <br><br>
            </div>
        </div>
    </div>

<?php
  include $_SERVER['DOCUMENT_ROOT']."/templates/footer.php";
?>