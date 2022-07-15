const modal = () => {
    const menu = document.getElementById('callback');
    const overlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
        
    const showModal = () => {
        overlay.style.display = 'block';
        menu.style.display = 'block';
    };
    const closeModal = () => {
        overlay.style.display = 'none';
        menu.style.display = 'none';
    };
    document.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target.matches('a.callback-btn') || target.classList.contains('fancyboxModal')) {
            event.preventDefault();
            showModal();
        } 
        if (target === overlay || target.closest('.modal-close') || target === modalClose) {
            event.preventDefault();
            closeModal();
        }
    });
};
export default modal;