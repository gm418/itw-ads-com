/*==================== display/hide the search input ====================*/
const searchButton = document.querySelector('#js-search-button'),
    searchInput = document.querySelector('#js-search-input');

searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
});
