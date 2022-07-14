const accordeon = () => {
  const accordeonItem = document.querySelectorAll('.accordeon > .element');
 

  accordeonItem.forEach((item) => {

      item.addEventListener('click', (event) => {
          event.preventDefault();
          let promise = new Promise((resolve) => {
              accordeonItem.forEach(item => {
                  item.classList.remove('active');
                  const elemContent = item.querySelector('.element-content');
                  elemContent.style.display = 'none';
              });
              resolve("result");
          });
          promise.then(
              result => {
                  item.classList.add('active');
                  const elemContent = item.querySelector('.element-content');
                  elemContent.style.display = 'block';
              },
              error => {
              console.log(error);
              }
          );
      });
  }); 
};

export default accordeon;