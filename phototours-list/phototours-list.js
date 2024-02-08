// Function to replace the entire element based on its content
function replaceFeaturedCardHeroImages() {
    // Iterate through elements with class "data_hero-image"
    $(".data_featured-card-hero-image").each(function() {
      // Get the content of each element
      var imageData = $(this).text().trim();
      
      // Replace with <img> tag
      $(this).replaceWith('<img src="' + imageData + '" class="phototours_schedules_featured-list-card-image">');
    });
}

function slider1() {
  let splides = $(".slider1");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 4,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "1rem", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: "slider", // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: true, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 2,
        },
        767: {
          // Mobile Landscape
          perPage: 2,
        },
        479: {
          // Mobile Portrait
          perPage: 1,
        },
      },
    }).mount();
  }
}
slider1();



