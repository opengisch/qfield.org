// Lightweight behavior for selecting amounts and updating the Donate link.
document.addEventListener('DOMContentLoaded', function () {
  const donateBtn = document.getElementById('donate-link');

  function setInitialHref() {
    const activePane = document.querySelector('.tab-pane.active');
    if (!activePane) return;
    const activeBtn = activePane.querySelector('.donation-amount.active') || activePane.querySelector('.donation-amount');
    if (activeBtn) donateBtn.href = activeBtn.getAttribute('data-url');
  }

  // Handle amount selection
  document.querySelectorAll('.donation-amount').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pane = btn.closest('.tab-pane');
      pane.querySelectorAll('.donation-amount').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      donateBtn.href = btn.getAttribute('data-url');
    });
  });

  // If Bootstrap 5 tabs are available, wire to tab change; else provide a minimal fallback
  const tabButtons = document.querySelectorAll('[data-bs-toggle="tab"]');
  if (typeof bootstrap !== 'undefined' && bootstrap.Tab) {
    tabButtons.forEach((tb) => {
      tb.addEventListener('shown.bs.tab', () => setInitialHref());
    });
  } else {
    // Fallback: simple manual tab switcher
    tabButtons.forEach((tb) => {
      tb.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(tb.getAttribute('data-bs-target'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('show', 'active'));
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        tb.classList.add('active');
        if (target) target.classList.add('show', 'active');
        setInitialHref();
      });
    });
  }

  setInitialHref();
});
