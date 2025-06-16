$(document).ready(function() {
  // Function to handle panel resizing and positioning
  function resizePanel() {
      // Get the current selected tab
      var currentTab = $('a.panel.selected');
      
      // If there's a selected tab, scroll to it without animation
      if (currentTab.length) {
          var targetHref = currentTab.attr('href');
          $('#wrapper').scrollTo(targetHref, 0);
      }
  }
  
  // Handle tab clicks
  $('a.panel').click(function () {
      // Update selected state
      $('a.panel').removeClass('selected');
      $(this).addClass('selected');
      
      // Store the current tab
      current = $(this);
      
      // Scroll to the selected tab with animation
      $('#wrapper').scrollTo($(this).attr('href'), 800);
      
      return false;
  });
  
  // Handle window resize
  $(window).resize(function () {
      // Call resizePanel function when window is resized
      resizePanel();
  });
  
  // Initialize by selecting the main tab if none is selected
  if (!$('a.panel.selected').length) {
      $('a.panel[href="#main"]').addClass('selected');
  }
  
  // Initial resize to ensure correct positioning
  resizePanel();
});
