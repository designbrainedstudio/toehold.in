var input = $("#Phone");

input.intlTelInput({
utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
separateDialCode: true
});

input.on("change", function () {
input.intlTelInput("setNumber", input.val()); //Format phone number e.g: "(123) 456-7890"
var fullPhone = input.intlTelInput("getNumber"); //Get number typed by user
$("#full_phone").val(fullPhone); //Add the full phone number with the dial code on a hidden input with "#full_phone" ID e.g.  +11234567890
var countryData = input.intlTelInput("getSelectedCountryData"); //Get country data array
var countryName = countryData.name; //Get country name
$("#country").val(countryName); //Add country name on a hidden input with the "#country" ID
});