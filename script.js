//document.addEventListener("scroll", alert("first test"))
const toggle = document.querySelector(".nav-toggle")
const navigation = document.querySelector(".nav-lists")

toggle.addEventListener("click", () => {
  navigation.classList.toggle("hidden")
})
