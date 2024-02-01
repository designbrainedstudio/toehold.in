// Function to replace the entire element based on its content
function replaceHeroImage() {
    // Iterate through elements with class "data_hero-image"
    $(".data_hero-image").each(function() {
      // Get the content of each element
      var imageData = $(this).text().trim();
      
      // Replace with <img> tag
      $(this).replaceWith('<img src="' + imageData + '" class="hero-header_bg-image">');
    });
}
