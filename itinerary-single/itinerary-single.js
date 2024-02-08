// Function to replace the entire element based on its content
function replaceItineraryHeroImage() {
    // Iterate through elements with class "data_itinerary-hero-image"
    $(".data_itinerary-hero-image").each(function() {
      // Get the content of each element
      var imageData = $(this).text().trim();
      
      // Replace with <img> tag
      $(this).replaceWith('<img src="' + imageData + '" class="itinerary_hero-image">');
    });
}

