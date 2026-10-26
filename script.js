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

// View Toggle References
const viewGridBtn = document.getElementById('viewGrid');
const viewTimelineBtn = document.getElementById('viewTimeline');

let currentContinent = 'all';
let currentSearch = '';
let currentView = 'grid'; // Tracks 'grid' or 'timeline'

// ---------- Render Empire Cards ----------
function renderEmpires() {
  timeline.innerHTML = '';

  // 1. Filter by continent
  let filtered = currentContinent === 'all'
    ? empires
    : empires.filter(e => e.continent === currentContinent);

  // 2. Filter by search text
  if (currentSearch.trim() !== '') {
    filtered = filtered.filter(e => 
      e.name.toLowerCase().includes(currentSearch.toLowerCase())
    );
  }

  // 3. Show "No results" message
  if (filtered.length === 0) {
    timeline.innerHTML = '<p style="text-align:center;grid-column:1/-1;color:#8b5e34;font-style:italic;font-size:1.2rem;margin-top:2rem;">No empires found. Try a different search or continent.</p>';
    return;
  }

  // 4. Handle Chronological Sorting for Timeline View
  if (currentView === 'timeline') {
    timeline.classList.add('timeline-mode');
    
    // Helper function to extract the start year for sorting
    const getStartYear = (periodString) => {
      const match = periodString.match(/\d+/);
      if (!match) return 0;
      let year = parseInt(match[0]);
      // Handle BC by making the number negative
      if (periodString.includes('BC')) {
        year = -year;
      }
      return year;
    };
    
    // Sort the array from oldest to newest
    filtered.sort((a, b) => getStartYear(a.period) - getStartYear(b.period));
  } else {
    timeline.classList.remove('timeline-mode');
  }

  // 5. Draw the cards
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

// ---------- View Toggles ----------
viewGridBtn.addEventListener('click', () => {
  currentView = 'grid';
  viewGridBtn.classList.add('active');
  viewTimelineBtn.classList.remove('active');
  renderEmpires();
});

viewTimelineBtn.addEventListener('click', () => {
  currentView = 'timeline';
  viewTimelineBtn.classList.add('active');
  viewGridBtn.classList.remove('active');
  renderEmpires();
});

// ---------- Initial Render ----------
renderEmpires();
