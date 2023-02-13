$(document).ready(function(){
    $('.section__gallery').slick({
        arrows:false,
        dots:false,
        slidesToShow:4,
        slidesToScroll:1,
        responsive:[
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow:3,
                    arrows:true,
                }
            },
            {
                breakpoint: 1142,
                settings: {
                    slidesToShow:2,
                    arrows:true,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow:1,
                    arrows:true,
                }
            }
        ]
    });
});