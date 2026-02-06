(function() {
  const doc = document.documentElement;
  if (!doc) return;

  const buttons = [document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')].filter(Boolean);
  const icons = [document.getElementById('themeIcon'), document.getElementById('themeIconMobile')].filter(Boolean);
  const defaultTheme = doc.getAttribute('data-theme-default') || 'light';

  function resolveTheme() {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (e) {
      /* ignore */
    }

    if (defaultTheme === 'dark') return 'dark';
    return 'light';
  }

  function renderIcon() {
    var cls = doc.getAttribute('data-bs-theme') === 'dark'
      ? 'bi bi-sun-fill'
      : 'bi bi-moon-stars-fill';
    icons.forEach(function(i) { i.className = cls; });
  }

  function setTheme(next, persist) {
    const theme = next === 'dark' ? 'dark' : 'light';
    doc.setAttribute('data-bs-theme', theme);
    if (persist) {
      try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
    }
    renderIcon();
  }

  // Ensure the attribute matches resolved preference and icon syncs
  setTheme(resolveTheme(), false);

  buttons.forEach(function(btn) {
    btn.addEventListener('click', () => {
      const current = doc.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      setTheme(current, true);
    });
  });

})();
