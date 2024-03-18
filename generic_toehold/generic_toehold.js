
/**********************************************************************************************
  SEARCH AUTO-FOCUS
  ********************************************************************************************* */
  
$("#search-box_open-button").click(function () {
  setTimeout(() => {
    document.getElementById("search").focus();
  }, 500);
});


/**********************************************************************************************
  QUICK LINKS MENU
  ********************************************************************************************* */
  
  // Current menu state.
  var menuOpened = false;

  // Is menu currently animating to open/close. Used to disable further clicks when animating.
  var menuAnimationRunning = false;

  // Button and Menu elements.
  var quickLinksButton = document.getElementsByClassName("qlmenu-menubutton")[0];
  var quickLinksMenu = document.getElementsByClassName("qlmenu")[0];
  var quickLinksMenuBackground = document.getElementsByClassName("qlmenu-background")[0];

  // Button to trigger the menu.
  quickLinksButton.onclick = function() {
    quickLinksMenuOpenClose();
  };
  
  // White background inside the menu component.
  quickLinksMenuBackground.onclick = function() {
    quickLinksMenuOpenClose();
  };
  
  // Menu Open/Close behavior.
  function quickLinksMenuOpenClose() {
    if (!menuAnimationRunning) {
      menuAnimationRunning = true;

      if (menuOpened) {
        console.log("FadeOut");
        setTimeout(fadeOutComplete, 500);
        quickLinksMenu.style.opacity = 0;
      } else {
        console.log("FadeIn");
        quickLinksMenu.style.opacity = 0;
        quickLinksMenu.classList.remove("qlmenu-hide");
        setTimeout(fadeInStart, 50);
      }
    }
  }

  // On complete of fade out animation, hide the menu, set flags.
  function fadeOutComplete() {
    quickLinksMenu.classList.add("qlmenu-hide");
    menuOpened = false;
    menuAnimationRunning = false;
    
    document.body.style.setProperty('overflow', 'auto');
  }

  // Start fade in of the menu, triggered on click of the menu button.
  function fadeInStart() {
    quickLinksMenu.style.opacity = 1;
    setTimeout(fadeInComplete, 500);
  }

  // On complete of fade in, set flags.
  function fadeInComplete() {
    menuOpened = true;
    menuAnimationRunning = false;
    
    document.body.style.setProperty('overflow', 'hidden');
  }