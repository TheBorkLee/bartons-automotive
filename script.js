(function () {
  'use strict';
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.primary-nav');
  function closeNavigation() {
    if (!toggle || !navigation) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('.sr-only').textContent = 'Open navigation';
    navigation.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  }
  if (toggle && navigation) {
    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.querySelector('.sr-only').textContent = isOpen ? 'Open navigation' : 'Close navigation';
      navigation.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('nav-open', !isOpen);
    });
    navigation.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeNavigation); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') { closeNavigation(); toggle.focus(); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 760) closeNavigation(); });
  }
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
