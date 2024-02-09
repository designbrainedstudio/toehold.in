function shareButtons() {
  let title = document.title;
  let url = window.location.href;
  $("[data-share-facebook").attr(
    "href",
    "https://www.facebook.com/sharer/sharer.php?u=" +
      url +
      "%2F&title=" +
      title +
      "%3F"
  );
  $("[data-share-facebook").attr("target", "_blank");

  $("[data-share-twitter").attr(
    "href",
    "https://twitter.com/share?url=" + url + "%2F&title=" + title + "&summary="
  );
  $("[data-share-twitter").attr("target", "_blank");

  $("[data-share-linkedin").attr(
    "href",
    "https://www.linkedin.com/shareArticle?mini=true&url=" +
      url +
      "%2F&title=" +
      title +
      "&summary="
  );
  $("[data-share-linkedin").attr("target", "_blank");

  $("[data-share-whatsapp").attr("href", "https://wa.me/?text=" + url);
  $("[data-share-whatsapp").attr("target", "_blank");
}

function replaceBlogPostHeroImage() {
  var imageData = $(".data_blog-hero").text().trim();
  $(".data_blog-hero").replaceWith(
    '<img src="' + imageData + '" class="blog-post-header_image">'
  );
}

function generateTOC() {
  generateAnchors();
}

function generateAnchors() {
  // Iterate through each blog post content
  var blogContent = $(".blog-post_content");
  // Iterate through each heading element within the blog post content
  blogContent.find("h1, h2, h3, h4, h5, h6").each(function () {
    // Get the text content of the heading
    var headingText = $(this).text();

    // Convert the text to a format suitable for an ID
    var idAttribute = headingText
      .toLowerCase()
      .replace(/^[^\w]+|[^\w]+$/g, "") // Remove leading and trailing non-word characters
      .replace(/[^\w]+/g, "-"); // Replace remaining non-word characters with hyphen

    // Add the ID attribute to the heading element
    $(this).attr("id", idAttribute);
  });

  generateTocLinks(blogContent);
}

function generateTocLinks(blogContent) {
  // Clear existing content in the wrapper div
  $(".blog-post_toc_link-wrapper").empty();

  // Find the UL container
  var tocList = $(".blog-post_toc_link-wrapper");

  // Find all heading tags within the blogContent
  $(blogContent)
    .find(":header")
    .each(function (index, heading) {
      // Create an anchor tag
      var anchorTag = $("<a></a>");

      // Set href to the id of the corresponding heading tag
      anchorTag.attr("href", "#" + heading.id);

      // Set class based on heading level and add "blog-post_toc_link-label"
      var headingLevelClass = "blog-post_toc_link-label";
      anchorTag.addClass(headingLevelClass);

      // Set the content of the anchor tag to be the same as the heading tag
      anchorTag.text($(heading).text());

      // Create a list item and add the anchor tag to it
      var listItem = $("<li></li>")
        .addClass(
          "blog-post_toc_link " + "is-" + heading.nodeName.toLowerCase()
        )
        .append(anchorTag);

      // Append the list item to the UL container
      tocList.append(listItem);

      // Smooth scroll when anchor tag is clicked
      anchorTag.on("click", function (e) {
        e.preventDefault();

        var targetId = $(this).attr("href");
        var targetPosition = $(targetId).offset().top;

        $("html, body").animate(
          {
            scrollTop: targetPosition,
          },
          800
        ); // Adjust the duration as needed
      });
    });
}
