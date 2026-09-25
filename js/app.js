// App entry point — runs after data.js, theme.js and render.js are loaded.
(function(){
  renderFeed();
  renderStats();
  renderTable('All');

  document.querySelectorAll('#filters button').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('#filters button').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      renderTable(btn.dataset.f);
    });
  });
})();
