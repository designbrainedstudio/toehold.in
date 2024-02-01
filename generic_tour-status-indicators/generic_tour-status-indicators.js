function changeTourStatusIndicatorColors() {
  const tourStatusIndicators = document.querySelectorAll(
    ".phototours_schedules_tour-status"
  );

  tourStatusIndicators.forEach((tourStatus) => {
    var value = tourStatus.innerText || tourStatus.textContent;

    switch (value.toLowerCase()) {
      case "new":
        tourStatus.style.backgroundColor = "#5bb238";
        break;
      case "filling fast":
        tourStatus.style.backgroundColor = "#e5921a";
        break;
      case "full":
        tourStatus.style.backgroundColor = "#e26240";
        break;
    }
  });
}
