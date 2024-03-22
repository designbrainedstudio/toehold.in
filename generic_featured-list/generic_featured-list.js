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

