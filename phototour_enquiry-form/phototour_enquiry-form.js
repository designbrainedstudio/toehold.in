function enquiryForm_populateDates() {
  $(".enquire_date-data-item").each(function () {
    var s = $(this).text();
    $(".enquire_dates-select").append(
      '<option value="' + s + '">' + s + "</option>"
    );
  });

  $("#enquire_date-data").remove();
}
