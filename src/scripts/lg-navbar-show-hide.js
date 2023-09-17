/*==================== display/hide the large navbar ====================*/
const menuButton = document.querySelector('#js-menu-button'),
    menuPanel = document.querySelector('#js-menu');

menuButton.addEventListener('click', () => {
    menuPanel.classList.contains('d-lg-block') ?
    menuPanel.classList.remove('d-lg-block') : menuPanel.classList.add('d-lg-block');
});
