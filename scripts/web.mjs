export default function webJS() {
    const query = document.querySelector.bind(document)
    const queryA = document.querySelectorAll.bind(document)

    //* FRAMES & ELEMENTS
    const bioBox = query('#bioBox')
    const contactBox = query('#contactBox')
    const referenceBox = query('#referenceBox')
    const conteudoBox = query('#conteudoBox').children
    const alertImage = query('.alert-pai-container > img')
    const optionsNav = queryA('.option')
    const portrait = window.matchMedia("(max-width: 1000px)")

    //? NAVBAR

    Array.from(optionsNav).forEach(opt => {
        opt.addEventListener('click', (e) => {
            cleanNavbar()
            e.currentTarget.classList.add('active')
        })
    })

    //? alert frame

    window.onload = alertImage.animate([
        {
            transform: 'rotateY(0deg)'
        },
        {
            transform: 'rotateY(360deg)'
        }
    ], {
        duration: 3000,
        iterations: Infinity
    })

    //? bio frame

    const btnsBio = queryA('.bio-pai-container .up-container .caixa-bio-container .botoes-container > div')
    Array.from(btnsBio).forEach(btn => {
        btn.addEventListener('click', (e) => {
            cleanBtns()
            e.currentTarget.classList.add('active')
        })
    })

    const contactMeBTN = query('#contactMeBTN').addEventListener('click', () => {
        cleanConteudoBox()
        contactBox.classList.add('show')
    })
    const bioBTN = query('#bioBTN').addEventListener('click', () => {
        cleanConteudoBox()
        bioBox.classList.add('show')
    })
    const referencesBTN = query('#referencesBTN').addEventListener('click', () => {
        cleanConteudoBox()
        referenceBox.classList.add('show')
    })

    //? Skills frame

    if (portrait.matches) {
        const cards = queryA('.card')
        Array.from(cards).forEach(card => {
            card.addEventListener('touchstart', (e) => {
                e.currentTarget.classList.add('active')
            })
            card.addEventListener('touchend', (e) => {
                e.currentTarget.classList.remove('active')
            })
        })
    }

    const swiper = new Swiper("main .habilities-pai-container .swiper", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },


        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                pagination: false,
                loop: false,
                slidesPerView: 3
            },
        },
    })


    //? Contact Form virtual keyboard


    if (portrait.matches) {
        const initialHeight = window.innerHeight

        const inputs = queryA('.contactForm-pai-container input')
        Array.from(inputs).forEach(input => {
            input.addEventListener('focus', () => {
                document.documentElement.style.setProperty("overflow", "auto")

                const metaViewport = document.querySelector("meta[name=viewport]")

                metaViewport.setAttribute("content", "height=" + initialHeight + ", width=device-width, initial-scale=1.0")
            })
            input.addEventListener('blur', () => {
                const metaViewport = document.querySelector("meta[name = viewport]")
                metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")
            })
        })
    }

    //* FUNCTIONS

    function cleanConteudoBox() {
        Array.from(conteudoBox).map(child => { child.classList.remove('show') })
    }
    function cleanNavbar() {
        Array.from(optionsNav).map(opt => { opt.classList.remove('active') })
    }
    function cleanBtns() {
        Array.from(btnsBio).map(btn => { btn.classList.remove('active') })
    }
}
