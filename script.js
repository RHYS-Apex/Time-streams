// ---------- Element References ----------
const timeline = document.getElementById('timeline');
const filterButtons = document.getElementById('filterButtons');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDescription = document.getElementById('modalDescription');
const modalDetails = document.getElementById('modalDetails');

// ---------- Render Empire Cards ----------
function renderEmpires(filter = 'all') {
  timeline.innerHTML = '';

  const filtered = filter === 'all'
    ? empires
    : empires.filter(e => e.continent === filter);

  if (filtered.length === 0) {
    timeline.innerHTML = '<p style="text-align:center;grid-column:1/-1;color:#8b5e34;font-style:italic;">No empires found for this continent yet.</p>';
    return;
  }

  filtered.forEach((empire, index) => {
    const card = document.createElement('div');
    card.className = 'empire-card';
    
    // We add a dynamic style based on the continent
    card.innerHTML = `
      <div class="card-banner" data-continent="${empire.continent}">
        <span class="banner-text">${empire.name}</span>
      </div>
      <div class="card-content">
        <span class="continent-tag">${empire.continent}</span>
        <h3>${empire.name}</h3>
        <p class="period">${empire.period}</p>
        <p class="summary">${empire.summary}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(index));
    timeline.appendChild(card);
  });
}

// ---------- Open Modal ----------
function openModal(originalIndex) {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.continent;
  const list = activeFilter === 'all' ? empires : empires.filter(e => e.continent === activeFilter);
  const empire = list[originalIndex];
  if (!empire) return;

  // Add the colored banner to the modal
  modalTitle.innerHTML = `
    <div class="modal-banner" data-continent="${empire.continent}">
      <span class="banner-text">${empire.name}</span>
    </div>
    <div style="padding-top: 1rem;">${empire.name}</div>
  `;
  
  modalMeta.textContent = `${empire.period} • ${empire.continent}`;
  modalDescription.textContent = empire.description;

  modalDetails.innerHTML = `
    <h3>📈 Rise</h3>
    <ul>${empire.rise.map(item => `<li>${item}</li>`).join('')}</ul>
    <h3>✨ Golden Age</h3>
    <ul>${empire.goldenAge.map(item => `<li>${item}</li>`).join('')}</ul>
    <h3>📉 Fall</h3>
    <ul>${empire.fall.map(item => `<li>${item}</li>`).join('')}</ul>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ---------- Close Modal ----------
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ---------- Filter Buttons ----------
filterButtons.addEventListener('click', (e) => {
  if (!e.target.classList.contains('filter-btn')) return;

  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  renderEmpires(e.target.dataset.continent);
});

// ---------- Initial Render ----------
renderEmpires();
