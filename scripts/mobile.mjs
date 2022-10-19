export default function mobileJS() {
    const query = document.querySelector.bind(document)
    const queryAll = document.querySelectorAll.bind(document)

    const bioBox = query('#bioBox')
    const contactBox = query('#contactBox')
    const referenceBox = query('#referenceBox')
    const conteudoBox = query('#conteudoBox').children

    //? bio frame
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


    function cleanConteudoBox() {
        Array.from(conteudoBox).map(child => {
            child.classList.remove('show')
        })
    }

}