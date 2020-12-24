$(document).ready(function() {  

        let alturaBarra= $('.barra').innerHeight();

        $(window).scroll(function(){
            let scroll= $(window).scrollTop();
            if (scroll > alturaBarra){
                $('.barra').addClass('fixed-barra');
                $('body').css({'margin-top': alturaBarra+'px'});
            }
            else{
                $('.barra').removeClass('fixed-barra');
                $('body').css({'margin-top': '0px'});
            }
        })

        $('.perfil').on('mouseenter',function(){
            $(this).find('.orden').removeClass('hidden');
            $(this).find('.orden').addClass('orden-show');
        });
        $('.perfil').on('mouseleave',function(){
            $(this).find('.orden').removeClass('orden-show');
            $(this).find('.orden').addClass('hidden');
        });
    
});