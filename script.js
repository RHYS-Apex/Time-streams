 // ---------- Element References ----------
const timeline = document.getElementById('timeline');
const filterButtons = document.getElementById('filterButtons');
const searchBar = document.getElementById('searchBar');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDescription = document.getElementById('modalDescription');
const modalDetails = document.getElementById('modalDetails');

let currentContinent = 'all';
let currentSearch = '';

// ---------- Render Empire Cards ----------
function renderEmpires() {
  timeline.innerHTML = '';

  let filtered = currentContinent === 'all'
    ? empires
    : empires.filter(e => e.continent === currentContinent);

  if (currentSearch.trim() !== '') {
    filtered = filtered.filter(e => 
      e.name.toLowerCase().includes(currentSearch.toLowerCase())
    );
  }

  if (filtered.length === 0) {
    timeline.innerHTML = '<p style="text-align:center;grid-column:1/-1;color:#8b5e34;font-style:italic;font-size:1.2rem;margin-top:2rem;">No empires found. Try a different search or continent.</p>';
    return;
  }

  filtered.forEach((empire) => {
    const card = document.createElement('div');
    card.className = 'empire-card';
    
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${empire.image}" alt="${empire.name}" class="card-img" onerror="this.style.display='none'">
      </div>
      <div class="card-content">
        <span class="continent-tag">${empire.continent}</span>
        <h3>${empire.name}</h3>
        <p class="period">${empire.period}</p>
        <p class="summary">${empire.summary}</p>
      </div>
    `;
    
    card.addEventListener('click', () => openModal(empire));
    timeline.appendChild(card);
  });
}

// ---------- Open Modal ----------
function openModal(empire) {
  modalTitle.innerHTML = `
    <div class="modal-image-wrapper">
      <img src="${empire.image}" alt="${empire.name}" class="modal-hero-img" onerror="this.style.display='none'">
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

  currentContinent = e.target.dataset.continent;
  renderEmpires();
});

// ---------- Search Bar ----------
searchBar.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  renderEmpires();
});

// ---------- Initial Render ----------
renderEmpires();
