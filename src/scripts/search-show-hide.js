/*==================== display/hide the search input ====================*/
const searchButton = document.getElementsByClassName('js-search-button'),
    searchInput = document.getElementsByClassName('js-search-input');

searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
});
