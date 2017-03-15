<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Barrio|Comfortaa:700|Syncopate:700" rel="stylesheet">
    <link href="/css/main-stylesheet.css" rel="stylesheet" type="text/css" />
    <style>
        #test {
            position: fixed;
            z-index: 9999;
        }
    </style>
</head>

<body>
    <button id="test">test</button>
    <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <header>
        <div id="welcome-container">
            <?php include 'welcome.php' ?>
            <div>
                <?php include 'scroll-attention-arrow.php' ?>
            </div>

        </div>
        <div id="main-about-me">
            <h1>My name is Shawn Flock, and I make websites.</h1>
            <h3>Do I design?</h3>
            <h3>Do I develop?</h3>
            <h2>Ummm....yeah</h2>
            <h3>I started as a TCP/IP tester and Network Acess Solutions in Herndon Virginia</h3>
            <h3>I have always been an artist and took graphic design in school, I started messing with HTML in my early 20's
                and by the time I hit thirty I had learned everything from front to back.</h3>

        </div>
        <div id="my-face-container">
            <h1>Kinda what I look like.....</h1>
            <?php include 'my-face.php' ?>

        </div>
        <h3>I like to mess with Javascript animations, I also like being on the cutting edge of code practices.</p>
    </header>
    <div id="design-graph-container">
        <h3>My skill level on the "design" side of things. </h3>
        <div>
            <p>ILLUSTRATOR</p>
            <p>INKSCAPE</p>
            <p>PHOTOSHOP</p>
            <p>GIMP</p>
            <p>SVG ANIMATIONS</p>
            <p>JAVASCRIPT ANAMATIONS</p>
        </div>
        <?php include 'design-graph.php' ?>
    </div>
    <div id="development-graph-container">
        <h3>My representation of my development skills...</h3>
        <div>
            <p>JAVASCRIPT</p>
            <p>HTML</p>
            <P>CSS</P>
            <p>MYSQL</p>
            <p>PHP</p>
            <p>MONGODB</p>
        </div>
        <?php include 'development-graph.php' ?>
    </div>
    <div id="outside-workflow-wrapper">
        <div>
            <p>Speak with my clients to get and idea</p>
            <p>Draw up a rough draft</p>
        </div>
        <div>
            
        </div>
        <div id="go-to-workflow-container">

            <?php include 'go-to-workflow.php' ?>

        </div>

    </div>
    <h1 id="about-me-h1">Well Hmmmm..... about me, not too much just the norm...</h1>
    <div id="main-about-container">
        <?php include 'about-me.php' ?>
        <img src="/images/me_snowboard_blackandwhite.png" alt="I like to snowboard">
    </div>
    <?php include 'footer.php' ?>
</body>

</html>