// Function to replace the entire element based on its content
function replaceBlogListThumbnails() {
  // Iterate through elements with class "data_blog-thumbnail"
  $(".data_blog-thumbnail").each(function () {
    // Get the content of each element
    var imageData = $(this).text().trim();

    // Replace with <img> tag
    $(this).replaceWith('<img src="' + imageData + '" class="blog_image">');
  });
}

var Webflow = Webflow || [];
Webflow.push(function () {
  // Manage active state for the All items button as filters are used
  $(".blog1_menu-filter-item").click(function () {
    if ($("#all-items-radio").is(":checked")) {
      $("#all-items-wrapper").addClass("active");
    } else {
      $("#all-items-wrapper").removeClass("active");
    }
  });
});
