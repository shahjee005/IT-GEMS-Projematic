const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const symbols = document.querySelectorAll('.symbols')

symbols.forEach(symbol => {
  console.log(symbol.name)
  symbol.addEventListener('click', () => {
   
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

openModalButtons.forEach(button => {
 
  button.addEventListener('click', () => {
  
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal, button.name)

  })
})
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal, name) {
 
  if (modal == null) return
  if ( name == 'project-charter'){
    modal.innerText = 'Hello Aaron'
  }
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}