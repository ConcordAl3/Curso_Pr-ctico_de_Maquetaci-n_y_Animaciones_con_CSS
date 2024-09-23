const modal__one = document.querySelector('.modal');
const modal__two = document.querySelector('.modal');
const modal__three = document.querySelector('.modal');


const closeIcon = document.querySelector('.modal__content__close');
const closeIcon2 = document.querySelector('.modal__content__close2');
const closeIcon3 = document.querySelector('.modal__content__close3');

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');



button1.addEventListener('click', () => {
  modal__one.classList.remove('hidden')
  modal__one.classList.add('visible')
})
closeIcon.addEventListener('click', () => {
    modal__one.classList.remove('visible')
    modal__one.classList.add('hidden')
  
  })


  button2.addEventListener('click', () => {
    modal__two.classList.remove('hidden')
    modal__two.classList.add('visible')
  })
  closeIcon2.addEventListener('click', () => {
      modal__two.classList.remove('visible')
      modal__two.classList.add('hidden')
    
    })

    button3.addEventListener('click', () => {
        modal__three.classList.remove('hidden')
        modal__three.classList.add('visible')
      })
      closeIcon3.addEventListener('click', () => {
          modal__three.classList.remove('visible')
          modal__three.classList.add('hidden')
        
        })