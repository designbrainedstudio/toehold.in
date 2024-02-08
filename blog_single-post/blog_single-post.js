function shareButtons() {
    let title = document.title;
    let url = window.location.href;
    $('[data-share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + url + '%2F&title=' + title + '%3F');
    $('[data-share-facebook').attr('target', '_blank');

    $('[data-share-twitter').attr('href', 'https://twitter.com/share?url=' + url + '%2F&title=' + title + '&summary=');
    $('[data-share-twitter').attr('target', '_blank');

    $('[data-share-linkedin').attr('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '%2F&title=' + title + '&summary=');
    $('[data-share-linkedin').attr('target', '_blank');
    
    $('[data-share-whatsapp').attr('href', 'https://wa.me/?text=' + url);
    $('[data-share-whatsapp').attr('target', '_blank');
}

function replaceHeroImage() {
    var imageData = $(".data_blog-hero").text().trim();
    $(".data_blog-hero").replaceWith('<img src="' + imageData + '" class="blog-post-header_image">');
}