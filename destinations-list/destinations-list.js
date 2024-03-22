// Function to replace the entire element based on its content
function replaceDestinationThumbnails() {
    // Iterate through elements with class "data_destination-featured-image"
    $(".data_destination-thumbnail").each(function() {
      // Get the content of each element
      var imageData = $(this).text().trim();
      
      // Replace with <img> tag
      $(this).replaceWith('<img src="' + imageData + '" class="generic_destination-card-thumbnail">');
    });
}
