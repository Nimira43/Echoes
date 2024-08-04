const inputs = document.querySelectorAll('.form-input')
const letter = document.querySelector('.letter')
const locks = document.querySelectorAll('.form-group i')

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    letter.style.opacity = 0 
    if (input.type !== 'password') {
      setTimeout(() => {
        letter.textContent = e.target.value.split('').slice(-1)
        letter.style.opacity = 1
      }, 100)
    } else {
      setTimeout(() => {
        letter.textContent = '*'
        letter.style.opacity = 1
      }, 100)
    }
  })
})

locks.forEach((lock) => {
  lock.addEventListener('click', () => {
    lock.classList.toggle('fa-lock-open')
    lock.classList.contains('fa-lock-open') ? (lock.previousElementSibling.type = 'text') : (lock.previousElementSibling.type = 'password')
  })
})