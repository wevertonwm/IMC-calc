const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal span'),
  btnClose: document.querySelector('.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },

  close: () => {
    Modal.wrapper.remove('open')
  }
}

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)

  Modal.open()
  Modal.message.innerText = ` Seu IMC é de ${result}`
}

Modal.btnClose.onclick = () => {
  Modal.close()
  location.reload()
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
