$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:4,
        slidesToScroll:1,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:3,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });
});