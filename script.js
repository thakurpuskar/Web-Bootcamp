
console.log(4);
const myForm = document.getElementById("myForm")
const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")

myForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (name.value.length <= 4) {
    alert("name should be more than 4 characters")
  }
  if (password.value.length <= 3) {
    alert("password should be at least 4 characters")
  }
})