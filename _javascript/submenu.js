$(document).ready(function(){
    $('.menup li').hover(
        function(){
            $('ul',this).slideDown();
        },
        function(){
            $('ul',this).fadeOut();
        }
    );
});
