btns = document.querySelectorAll('button')

btns.forEach(node => {
  node.addEventListener('click', (node) => {
    node.classList.toggle('active')
  })
});