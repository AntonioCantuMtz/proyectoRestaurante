$(document).ready(function(){
    /* EFECTO MENU */
    //Para que se le vaya aplicando el efecto de uno en uno a cada uno de los elementos 
    $(".menu a").each(function(index, elemento){
        $(this).css({
            "top": "-200px"
        });

        //El index se refiere a la primera ejecucion del codigo
        //Como su fuera un ciclo, en este caso index = 0 (por asi decirlo)
        $(this).animate({
            top: "0"
        }, 2000 + (index * 500));
    });

    /** EFECTO HEADER */
    if( $(window).width() > 800 )
    {
        $("header .textos").css({
            opacity: 0,
            marginTop: 0
        });

        $("header .textos").animate({
            opacity: 1,
            marginTop: "-52px"
        }, 1500);
    }   

    //Scroll elementos menu
    var acercaDe = $("#acerca-de").offset().top,
        menu = $("#platillos").offset().top,
        galeria = $("#galeria").offset().top,
        ubicacion = $("#ubicacion").offset().top;

    $("#btn-acerca-de").on("click", function(e){
        e.preventDefault(); //Para agregarle este simbolo # que nos agrega la pagina al pulsar el boton correspondiente
        $("html, body").animate({
            scrollTop: acercaDe - 50
        }, 500);
    });

    $("#btn-menu").on("click", function(e){
        e.preventDefault(); //Para agregarle este simbolo # que nos agrega la pagina al pulsar el boton correspondiente
        $("html, body").animate({
            scrollTop: menu
        }, 500);
    });

    $("#btn-galeria").on("click", function(e){
        e.preventDefault(); //Para agregarle este simbolo # que nos agrega la pagina al pulsar el boton correspondiente
        $("html, body").animate({
            scrollTop: galeria
        }, 500);
    });

    $("#btn-ubicacion").on("click", function(e){
        e.preventDefault(); //Para agregarle este simbolo # que nos agrega la pagina al pulsar el boton correspondiente
        $("html, body").animate({
            scrollTop: ubicacion
        }, 500);
    });

});