const buttons = window.document.getElementsByClassName("icecream")
const footer = window.document.getElementsByTagName("footer")[0]
const header = window.document.getElementsByTagName("header")[0]
const search = window.document.querySelector(".search")
const search_bar = window.document.querySelector("#search_bar")
let reswidth = screen.width


buttons[0].addEventListener("click", blue_click)
buttons[1].addEventListener("click", pink_click)
buttons[2].addEventListener("click", orange_click)

function blue_click() {
    footer.style.background="rgba(81, 111, 251, 0.56)" 
    header.style.background="linear-gradient(180deg, rgba(81, 111, 251, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)"
}

function pink_click() {
    footer.style.background="rgba(244, 155, 140, 0.56)" 
    header.style.background="linear-gradient(#FF99C4, 70%, white)"
}

function orange_click() {
    footer.style.background="rgba(240, 94, 43, 0.56)" 
    header.style.background="linear-gradient(180deg, rgba(240, 94, 43, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)"
}

if (reswidth <= 571) {
    search.addEventListener("click", toggle)
    function toggle() {
        let active = search.classList.toggle("active")
        if (active || search_bar.style.display === "none") {
             search_bar.style.display = "flex"
        } else {
            search_bar.style.display = "none"
        }         
    }  
} else {
    search_bar.style.display = "flex"
}

