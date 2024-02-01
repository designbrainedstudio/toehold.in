// Function to replace the entire element based on JSON data
function replaceTourIconElements() {
	var jsonData = defineTourIcons();

      // Iterate through elements with class "data_tour-icon"
      $(".data_tour-icon").each(function() {
        // Get the content of each element
        var iconData = $(this).text().trim();

        // Find the corresponding object in JSON data
        var matchingIcon = jsonData.find(function(icon) {
          return icon.tourIconName === iconData;
        });

        // If a match is found, replace with <img> tag
        if (matchingIcon) {
          $(this).replaceWith('<img src="' + matchingIcon.tourIconFile + '" class="tour-icon">');
        }
      });
}
