let count = 0

const value = document.querySelector("#value")
const increase = document.querySelector(".btn-increase")
const reset = document.querySelector(".btn-rest")
const decrease = document.querySelector(".btn-decrease")

increase.addEventListener("click", function (event){
    const actions = event.currentTarget.classList;
    if (actions.contains("increase")) {
        count++
    }
    value.textContent = count
})
decrease.addEventListener("click", function (event){
    const actions = event.currentTarget.classList;
    if (actions.contains("decrease")) {
        count--
    }
    value.textContent = count
})
reset.addEventListener("click", function (event){
    const actions = event.currentTarget.classList;
    if (actions.contains("reset")) {
        count = 0
    }
    value.textContent = count
})

