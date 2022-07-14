const inputValidation = () => {
    document.addEventListener('input', (event) => {
        const target = event.target;

        if (target.matches('.tel')){
            target.value = target.value.replace(/[^+\d]/g, '');
            
            if (target.value.length > 12) {
                target.value = target.value.slice(0, 13);
            } 
        }
        if (target.className === 'form-control'){
            target.value = target.value.replace(/[^а-яё\s]/gi, '').replace(/\s+/g, ' ').replace(/^\s/g, '');
        } 
    });

    document.addEventListener('blur', (event) => {
        const target = event.target;

        if (target.className === 'form-control'){
            if (target.value.trim().length < 2) {
                alert('Имя не может состоять из одной буквы');
                target.value = '';
            } 
            if (target.value.trim() !== '') {
                let temp = target.value.split(/\s+/);
                if (temp.length) {
                    let output = temp.map((item) => {
                        if (item != '') {

                            item = item[0].toUpperCase() + item.slice(1).toLowerCase();
                            return item;
                        }
                    });
                    target.value = output.join(' ').replace(/\s$/g, '');
                }
            }
        }
        if (target.matches('.tel')){
            if (target.value.length < 7) {
                alert('Укажите телефон в формате +7(___)___-____');
                target.value = '';
            }
        }
    
    }, true); 



};
export default inputValidation;