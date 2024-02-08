// Function to replace the entire element based on its content
function replaceBlogListThumbnails() {
    // Iterate through elements with class "data_blog-thumbnail"
    $(".data_blog-thumbnail").each(function() {
      // Get the content of each element
      var imageData = $(this).text().trim();
      
      // Replace with <img> tag
      $(this).replaceWith('<img src="' + imageData + '" class="blog_image">');
    });
}

function replaceHeroImage() {
    var imageData = $(".data_blog-hero").text().trim();
    $(".data_blog-hero").replaceWith('<img src="' + imageData + '" class="blog-post-header_image">');
}
