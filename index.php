<!doctype html>
<!--[if lt IE 7 ]><html class="ie ie6 no-js" lang="en"><![endif]-->
<!--[if IE 7 ]><html class="ie ie7 no-js" lang="en"><![endif]-->
<!--[if IE 8 ]><html class="ie ie8 no-js" lang="en"><![endif]-->
<!--[if IE 9 ]><html class="ie ie9 no-js" lang="en"><![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="es"><!--<![endif]-->
       <!-- html5.js for IE less than 9 -->
        <!--[if lt IE 9]>
                <script src="js/lib/html5.js"></script>
        <![endif]-->
    

<head>
  <meta charset="UTF-8"/>
  <meta name="description" content=""/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
  <meta name="google-site-verification" content=""/>
  <meta name="robots" content="All" />
  <meta name="keywords" content="" />

  <title>Proyecto</title>
   
  <link type="text/plain" rel="author" href="humans.txt" />
  <link rel="shortcut icon" href="favicon.ico" >
  <link rel="stylesheet" href="css/proyecto.css"/>

  <script src="js/lib/modernizr.min.js"></script>

</head>
<body>

<?php include('header.php'); ?>	



<!--=======================Inicio Contenido=============================-->

<section class="reproductor medio largo">
  <div class="musica">
    <div class="reprod">
      
    </div>
  </div>

  <div class="canciones right">
    <ul class="vinietas-none">
    </ul>
  </div>
</section>

<section class="wrapper albumnes">

</section>
<!--===Fin Contenido===-->

<!-- template reproducto  -->
<script id="player-template" type="text/x-handlebars-template">
  <figure class="relative">
    <img src="{{album_cover}}"  width="320" height="320" alt="Tomalo">
    <div class="acciones padding">
      <a href="" class="action icon-add"></a>
      <a href="" class="action icon-love"></a>
      <a href="" class="action icon-share"></a>
    </div>
  </figure>
  <div class="padding">
    <div class="progress">
      <span class="min">0:00</span>
      <div class="barra">
        <div class="carga">
          <div class="circulo"></div>
        </div>
      </div>
      <span class="max">{{length}}</span>
    </div>
    <div class="descripcion border-bottom">
      <p class="nombre">{{name}}r</p>
      <p class="autro">{{author}}</p>
    </div>
    <div class="play padding-tb">
        <a href="" class="gris icon-prev"></a>
        <a href="" class="gris icon-play"></a>
        <a href="" class="gris icon-next"></a>
        <a href="" class="gris icon-random"></a>
        <a href="" class="gris icon-vol"></a>
      </div>
  </div>
</script>


<!-- templeta canciones -->
<script id="song-template" type="text/x-handlebars-template">
  <span>{{name}} - {{length}}</span>
  <span class="right">
    <a href="" class="action icon-add gris"></a>
    <a href="" class="action icon-love gris"></a>
    <a href="" class="action icon-share gris"></a>
  </span>
</script>


<!-- templete albumnes -->
<script id="album-template" type="text/x-handlebars-template">
  <figure>
      <img src="{{cover}}" width="128" height="128" alt="Tomalo">
    </figure>
    <p class="nombre">{{name}} - {{year}}</p>
    <p class="autor">{{author}}</p>
</script>


<!--=======================Inicio Footer================================-->
<?php include('footer.php'); ?>

<!--===Fin Footer===-->

</body>
</html>