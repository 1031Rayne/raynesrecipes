if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  const body = document.querySelector('body');
  body.style.backgroundAttachment = 'scroll';
}
