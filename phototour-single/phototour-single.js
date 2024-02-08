function populateCostTierCards() {
    // Get the input text data
    var inputData = $('#cost-tier-data').html();

    // Check if there is data
    if (inputData) {
        // Clear the existing content of the main cards element
        $('.tour-page_cost-tier-cards').empty();

        // Split the data into sets (assuming each set starts with an H5)
        var cardSets = inputData.split('<h5>');

        // Process each set
        for (var i = 1; i < cardSets.length; i++) {
            // Create a new card element
            var newCard = $('<div class="tour-page_cost-tier-card"></div>');

            // Extract title, value, and description from the set
            var titleText = cardSets[i].split('</h5>')[0]; // Extract text content from H5
            var title = $('<div class="tour-page_cost-tier-card-title"></div>').text(titleText);

            var value = $('<div class="tour-page_cost-tier-card-value-block"></div>').html(cardSets[i].split('<p>')[1]);
            var description = $('<div class="tour-page_cost-tier-card-description"></div>').html(cardSets[i].split('<p>')[2]);

            // Append title, value, and description to the new card
            newCard.append(title, value, description);

            // Append the new card to the main cards element
            $('.tour-page_cost-tier-cards').append(newCard);
        }

        // Remove the input text element from the HTML document
        $('#cost-tier-data').remove();
    }
}

function populateDatesInEnquiryForm() {
    $(".enquire_date-data-item").each(function () {
      var s = $(this).text();
      $(".enquire_dates-select").append(
        '<option value="' + s + '">' + s + "</option>"
      );
    });
  
    $("#enquire_date-data").remove();
  }
  