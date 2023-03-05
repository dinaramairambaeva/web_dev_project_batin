$('.review-content').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    responsive: [{
        breakpoint: 700,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    }]
  });