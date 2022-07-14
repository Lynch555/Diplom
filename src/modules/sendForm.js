const sendForm = () => {
    const errorMessage = 'Ошибка',
        loadMessage = 'Идет отправка...',
        successMessage = 'Отправлено!',
        menu = document.getElementById('callback'),
        overlay = document.querySelector('.modal-overlay'),
        formModal = document.querySelector('form');

    
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size 2rem;';

    const postData = (body) => fetch('./server.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    
        formModal.addEventListener('submit', (event) => {
            const target = event.target;
            event.preventDefault();
            formModal.appendChild(statusMessage);
            statusMessage.style.color = 'black';
            const formElem = [...target.elements].filter(item => item.tagName.toLowerCase() !== 'button');
            const formData = new FormData(target);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            if (formElem[0].value !== '' && formElem[1].value !== '') {
                statusMessage.textContent = loadMessage;
                postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('network failed');
                    }
                    statusMessage.textContent = successMessage;
                    setTimeout(() => {
                        statusMessage.textContent = '';
                        overlay.style.display = 'none';
                        menu.style.display = 'none';
                    }, 3000);
                    formElem.forEach(item => {
                        if(item.type !== 'submit') {
                        item.value = '';
                        }
                    });

                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.log(error);
                    setTimeout(() => {
                        statusMessage.textContent = '';
                    }, 5000);
                });
            formModal.querySelectorAll('input').forEach((item) => {
                if(item.type !== 'submit') {
                item.value = '';
                }
            });
            } else {
                event.preventDefault();
                alert('Введите корректные данные');
            }
        });    
};
export default sendForm;