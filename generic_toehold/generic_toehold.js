
/**********************************************************************************************
  SEARCH AUTO-FOCUS
  ********************************************************************************************* */
  
$("#search-box_open-button").click(function () {
  setTimeout(() => {
    document.getElementById("search").focus();
  }, 500);
});
