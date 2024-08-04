const inputs = document.querySelectorAll('.form-input')
const letter = document.querySelector('.letter')

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    letter.style.opacity = 0 
    if (input.type !== 'password') {
      setTimeout(() => {
        letter.textContent = e.target.value.split('').slice(-1)
        letter.style.opacity = 1
      }, 100)
    }
  })
})