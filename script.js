window.addEventListener('load', function() {
  if (!CallTrkSwap._referrer.includes('attorneyatlawmagazine.com')) {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        form.setAttribute('data-cr-no-capture', 'true');
        form.removeAttribute('cr-attached');
      });
  }
});
