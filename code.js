const form = document.forms["myForm"]
const input = form["task"]
const ul = document.getElementById("tasklist")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const val = input.value

    const newli = document.createElement("li")
    newli.innerHTML = val + "<i onclick = \"deletetask(this)\"class=\"fa-solid fa-xmark\" style=\"float: right;\"></i>"
    ul.appendChild(newli )
})

function deletetask(e) {
    e.parentElement.style.textDecoration="line-through"
}
