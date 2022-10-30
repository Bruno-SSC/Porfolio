export default function mobileJS() {
    const query = document.querySelector.bind(document)
    const queryA = document.querySelectorAll.bind(document)

    //? bio frame

    //* Variables

    const bioBox = query('#bioBox')
    const contactBox = query('#contactBox')
    const referenceBox = query('#referenceBox')
    const conteudoBox = query('#conteudoBox').children

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

    //* Functions

    function cleanConteudoBox() {
        Array.from(conteudoBox).map(child => {
            child.classList.remove('show')
        })
    }

    //? Project frame

    //* Variables
    const projectRow1 = query('#projectRow1')
    const projectRow2 = query('#projectRow2')
    const projectRow3 = query('#projectRow3')
    const projectRows = [projectRow1, projectRow2, projectRow3]

    let touchstartX = 0
    let touchendX = 0
    let position = 0

    //* Functions

    projectRows.forEach(row => {
        row.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX
        })
        row.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX
            moveRow(row)
        })
    })

    function moveRow(target) {
        if (touchendX < touchstartX) {
            if (position == -180) return
            position = position - 90
            target.style.setProperty("--rowPos", position + "vw")
        }
        if (touchendX > touchstartX) {
            if (position == 0) return
            position = position + 90
            target.style.setProperty("--rowPos", position + "vw")
        }
    }
}