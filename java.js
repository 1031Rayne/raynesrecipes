// Check if the device is a mobile device based on the viewport width
function isMobileDevice() {
    return window.innerWidth <= 767; // Adjust the breakpoint as needed
  }
  
  // Update the background attachment based on the device type
  function updateBackgroundAttachment() {
    var backgroundImageElement = document.querySelector('body::before');
    if (isMobileDevice()) {
      backgroundImageElement.style.backgroundAttachment = 'scroll';
    } else {
      backgroundImageElement.style.backgroundAttachment = 'fixed';
    }
  }
  
  // Call the updateBackgroundAttachment function on page load and when the window is resized
  window.addEventListener('DOMContentLoaded', updateBackgroundAttachment);
  window.addEventListener('resize', updateBackgroundAttachment);
