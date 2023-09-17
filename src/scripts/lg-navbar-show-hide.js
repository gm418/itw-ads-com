/*==================== display/hide the large navbar ====================*/
const menuButton = document.querySelector('#js-menu-button'),
    menuPanel = document.querySelector('#js-menu');

menuButton.addEventListener('click', () => {
    menuPanel.classList.contains('d-none') ?
    menuPanel.classList.remove('d-none') : menuPanel.classList.add('d-none');
});