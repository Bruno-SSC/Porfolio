
/* Reviews da versão web */
ScrollReveal({
    distance: '60px', delay: 300, duration: 1000, origin: 'bottom', reset: false
})

ScrollReveal().reveal('.alert-pai-container > *')
ScrollReveal().reveal('.home-pai-container > *')
ScrollReveal().reveal('.project-pai-container > *')
ScrollReveal().reveal('.bio-pai-container > *', { origin: 'right' })
ScrollReveal().reveal('#contactMeBTN', { origin: 'right', delay: 700 })
ScrollReveal().reveal('#bioBTN', { origin: 'right', delay: 900 })
ScrollReveal().reveal('#referencesBTN', { origin: 'right', delay: 1200 })
ScrollReveal().reveal('.habilities-pai-container > *', { origin: 'right' })
ScrollReveal().reveal('.contactForm-pai-container > *', { origin: 'right'})

VanillaTilt.init(document.querySelectorAll(".botoes-container > *"), {
    max: 20,
    reverse: true,
    speed: 400,
    glare: true,
    "max-glare": .3
})
VanillaTilt.init(document.querySelectorAll(".project-container"), {
    max: 20,
    speed: 400,
    reverse: true
})
