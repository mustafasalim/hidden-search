const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

eventListener()

function eventListener() {
  btn.addEventListener("click", btnClick)
}

function btnClick() {
  search.classList.toggle("active")
  input.focus()


  
}
