// Rendering functions — read from `incidents` (data.js) and paint the DOM.

function renderFeed(){
  const feedList = document.getElementById('feedList');
  incidents.slice(0, 4).forEach(function(i){
    const el = document.createElement('div');
    el.className = 'feed-item';
    el.innerHTML =
      '<div class="feed-thumb">' + i.icon + '</div>' +
      '<div class="feed-body">' +
        '<p class="feed-title">' + i.hazard + '</p>' +
        '<p class="feed-meta">' + i.loc + ' · ' + i.time + '</p>' +
      '</div>' +
      '<span class="sev sev-' + sevClass[i.sev] + '">' + i.sev + '</span>';
    feedList.appendChild(el);
  });
}

function renderStats(){
  const counts = {Critical:0, High:0, Medium:0, resolved:0};
  incidents.forEach(function(i){
    counts[i.sev]++;
    if (i.status === 'Resolved') counts.resolved++;
  });

  const statData = [
    [counts.Critical, 'Critical incidents open'],
    [counts.High, 'High-risk incidents open'],
    [counts.resolved, 'Verified closures this week'],
    ['4.1 hr', 'Avg. detection-to-assignment']
  ];

  const statGrid = document.getElementById('statGrid');
  statData.forEach(function(s){
    const el = document.createElement('div');
    el.className = 'stat';
    el.innerHTML = '<b>' + s[0] + '</b><span>' + s[1] + '</span>';
    statGrid.appendChild(el);
  });
}

function renderTable(filter){
  const incTable = document.getElementById('incTable');
  incTable.innerHTML = '';

  const head = document.createElement('div');
  head.className = 'inc-row head';
  head.innerHTML = '<div>Hazard</div><div>Severity</div><div>Location</div><div>Department</div><div>Status</div>';
  incTable.appendChild(head);

  incidents
    .filter(function(i){ return filter === 'All' || i.sev === filter; })
    .forEach(function(i){
      const row = document.createElement('div');
      row.className = 'inc-row';
      row.innerHTML =
        '<div class="inc-hazard">' + i.icon + ' ' + i.hazard + '</div>' +
        '<div><span class="dot dot-' + sevClass[i.sev] + '"></span> ' + i.sev + '</div>' +
        '<div>' + i.loc + '</div>' +
        '<div>' + i.dept + '</div>' +
        '<div class="status">' + i.status + '</div>';

      const detail = document.createElement('div');
      detail.className = 'detail';
      let bars = '';
      for (let s = 1; s <= 6; s++) bars += '<span class="' + (s <= i.stage ? 'done' : '') + '"></span>';
      detail.innerHTML =
        '<div class="detail-grid">' +
          '<div><b>' + i.conf + '% confidence</b>AI detection score</div>' +
          '<div><b>' + i.id + '</b>Incident reference</div>' +
          '<div><b>' + i.time + '</b>First detected</div>' +
        '</div>' +
        '<p style="margin:0 0 10px">' + i.desc + '</p>' +
        '<div class="stage-line">' + bars + '</div>';

      row.addEventListener('click', function(){ detail.classList.toggle('open'); });
      incTable.appendChild(row);
      incTable.appendChild(detail);
    });
}
