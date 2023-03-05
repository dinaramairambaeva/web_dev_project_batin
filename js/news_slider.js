let prevArrow = document.getElementById('news-arrow-left');
let nextArrow = document.getElementById('news-arrow-right');

console.log(prevArrow)

$('.news-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }
    
    ]
  });