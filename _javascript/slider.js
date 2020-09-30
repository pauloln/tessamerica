$(function(){

    var liWidth = $("#galeria ul li").outerWidth(),
        speed   = 5000,
        rotate  = setInterval(auto, speed);

   //APARECER BOTOES
    $("section#galeria").hover(function(){
       $("section#botaoe").fadeIn();
        clearInterval(rotate)
   }, function(){
       $("section#botaoe").fadeOut();
        rotate = setInterval(auto, speed);
   });

    $("section#galeria").hover(function(){
       $("section#botaod").fadeIn();
        clearInterval(rotate)
   }, function(){
       $("section#botaod").fadeOut();
   });

    // BOTAO PROXIMO
    $(".next").click(function(e){
        e.preventDefault();

        $("section#galeria ul").css({'width':'99999%'}).animate({left:-liWidth}, function(){
            $("#galeria ul li").last().after($("#galeria ul li").first());
            $(this).css({'left':'0', 'width':'auto  '})
        });
    });

    // BOTAO VOLTAR
    $(".prev").click(function(e){
        e.preventDefault

        $("#galeria ul li").first().before($("#galeria ul li").last().css({'margin-left':-liWidth}));
        $("section#galeria ul").css({'width': '99999%'}).animate({left:liWidth}, function(){
            $("#galeria ul li").first().css({'margin-left':0});
            $(this).css({'left':'0', 'width':'auto'});
        });
    });

    function auto(){
        $(".next").click();
    }

});
