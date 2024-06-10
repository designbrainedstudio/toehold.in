// Function to replace the entire element based on its content
function replaceFeaturedCardHeroImages() {
  // Iterate through elements with class "data_hero-image"
  $(".data_featured-card-hero-image").each(function () {
    // Get the content of each element
    var imageData = $(this).text().trim();

    // Replace with <img> tag
    $(this).replaceWith(
      '<img src="' +
        imageData +
        '" class="phototours_schedules_featured-list-card-image">'
    );
  });
}

function initializeFeaturedList() {
  // Slick Slider for Featured Tours
  $(".featured-product_list").slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $(".slider_arrow-right"),
    prevArrow: $(".slider_arrow-left"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
