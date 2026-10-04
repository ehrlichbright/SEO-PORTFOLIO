(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // Open a case study automatically when linked directly, e.g. /#wellington-college-lagos
  function openFromHash() {
    var target = location.hash && document.getElementById(location.hash.slice(1));
    var details = target && target.querySelector('.case-detail');
    if (details) details.open = true;
  }
  window.addEventListener('hashchange', openFromHash);
  openFromHash();

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
