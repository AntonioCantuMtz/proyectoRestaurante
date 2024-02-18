$(document).ready(function(){
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


});