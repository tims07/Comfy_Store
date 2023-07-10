import { getElement } from './utils.js';

const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');

// Event Listeners

toggleNav.addEventListener('click', () => {
    sidebarOverlay.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show');
})

// We're going to import the entire file into index.js