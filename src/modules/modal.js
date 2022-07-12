const modal = () => {
    const menu = document.getElementById('callback'),
        overlay = document.querySelector('.modal-overlay'),
        modalClose = document.querySelector('.modal-close');
        
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
            showModal();
        } 
        if (target === overlay || target.closest('.modal-close') || target === modalClose) {
            closeModal();
        }
    });

    



};
export default modal;