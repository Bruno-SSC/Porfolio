const portrait = window.matchMedia("(orientation: portrait)")
const landscape = window.matchMedia("(orientation: landscape)")

if(portrait.matches){
    location.href = "./html/web.html"
}
if(landscape.matches){
    location.href = "./html/web.html"
}