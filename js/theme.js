// Dark/light mode toggle, persisted per browser via localStorage.
(function initTheme(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  try {
    const saved = localStorage.getItem('cs-theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch(e){ /* storage unavailable — fall back to system preference */ }

  toggle.addEventListener('click', function(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('cs-theme', next); } catch(e){}
  });
})();
