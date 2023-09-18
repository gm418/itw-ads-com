/*==================== display/hide the search input ====================*/
const searchButton = document.querySelector('#js-search-button'),
    searchInput = document.querySelector('#js-search-input');

searchButton.addEventListener('click', (e) => {
    searchInput.classList.contains('d-none') ?
    searchInput.classList.remove('d-none') : searchInput.classList.add('d-none');
    e.preventDefault();
});
