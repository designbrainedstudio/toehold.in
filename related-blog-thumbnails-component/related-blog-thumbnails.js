// Function to replace the entire element based on JSON data
function replaceRelatedBlogThumbnails() {
      // Iterate through elements with class "tour-icon-data"
      $(".blog-thumbnail-data").each(function() {
        // Get the content of each element
        var iconData = $(this).text().trim();
        
        // If a match is found, replace with <img> tag
        $(this).replaceWith('<img src="' + iconData + '" class="dest-single-page_blog-thumbnail">');
      });
}
