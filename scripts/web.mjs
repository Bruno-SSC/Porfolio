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
