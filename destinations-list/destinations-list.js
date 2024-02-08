// Function to replace the entire element based on its content
function replaceDestinationFeaturedImages() {
    // Iterate through elements with class "data_destination-featured-image"
    $(".data_destination-featured-image").each(function() {
      // Get the content of each element
      var imageData = $(this).text().trim();
      
      // Replace with <img> tag
      $(this).replaceWith('<img src="' + imageData + '" class="destinations-page_dest-card-bg-image">');
    });
}
