import webJS from "./web.mjs"
import mobileJS from "./mobile.mjs"

const portrait = window.matchMedia("(orientation: portrait)")
const landscape = window.matchMedia("(orientation: landscape)")

if (portrait.matches) {
    mobileJS()
}
if (landscape.matches) {
    webJS()
}

screen.orientation.addEventListener('change', ()=>{
    location.href = "../index.html"
})