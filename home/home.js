/**********************************************************************************************
  DESTINATION THUMBNAILS
  ********************************************************************************************* */
// Function to replace the entire element based on its content
function replacereplaceDestinationThumbnails() {
    // Iterate through elements with class "data_destination-thumbnail"
    $(".data_destination-thumbnail").each(function() {
      // Get the content of each element
      var imageData = $(this).text().trim();
  
      // Replace with <img> tag
      $(this).replaceWith('<img src="' + iconData + '" class="generic_destination-card-thumbnail">');
    });
  }