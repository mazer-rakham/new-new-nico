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
        position:fixed;
        z-index:9999;
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
        </div>
        <div id="my-face-container">
            <?php include 'my-face.php' ?>
        </div>
    </header>
    <div id="design-graph-container">
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
        <div id="go-to-workflow-container">
            <div>
                <p id="and-enviroments-line">And Environments</p>
                <?php include 'go-to-workflow.php' ?>
            </div>
            <div id="environments-container">
                <p>VSCODE</p>
                <p>GULP</p>
                <p>GITHUB</p>
                <p></p>
            </div>
            <div id="goto-codes">
                <p>BOOTSTRAP</p>
                <p>GSAP</p>
                <p>JQUERY</p>
                <p>PHP</p>
                <p>MySQL</p>
            </div>
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