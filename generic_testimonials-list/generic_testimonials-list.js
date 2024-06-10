function initializeTestimonialsList() {
    // Slick Slider for Featured Tours
    $(".testimonials_list").slick({
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: true,
      swipeToSlide: true,
      nextArrow: $(".slider_arrow-right"),
      prevArrow: $(".slider_arrow-left")
    });
  }
  