window.addEventListener('load', function() {
  if (!CallTrkSwap._referrer.includes('attorneyatlawmagazine.com')) {
      document.querySelector('form').setAttribute('data-cr-no-capture', 'true').removeAttribute('cr-attached');
  }
});
