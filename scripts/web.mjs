export default function webJS() {
    const query = document.querySelector.bind(document)
    const queryAll = document.querySelectorAll.bind(document)

    //* FRAMES
    const alertFrame = query('#alertFrame')
    const homeFrame = query('#homeFrame')
    const projectsFrame = query('#projectsFrame')
    const bioFrame = query('#bioFrame')
    const miniAlert = query('#miniAlert')
    const bioBox = query('#bioBox')
    const contactBox = query('#contactBox')
    const referenceBox = query('#referenceBox')
    const conteudoBox = query('#conteudoBox').children

    //* SHOWING ALERT FRAME
    alertFrame.classList.add('moved-right')

    //* BUTTONS

    //? alert frame
    const alertBTN1 = query('#alertBTN1').addEventListener('click', alertBTNs)
    const alertBTN2 = query('#alertBTN2').addEventListener('click', alertBTNs)

    //? home frame
    const projectsBTN = query('#projetos').addEventListener('click', () => {
        hideOpt()
        frameAway(homeFrame)
        frameCall(projectsFrame)
    })

    //? projects frame
    const nextBTN = query('#nextBTN').addEventListener('click', () => {
        frameAway(projectsFrame)
        frameCall(bioFrame)
    })

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

    const backHomeBTN = query('#backHomeBTN').addEventListener('click', () => {
        showOpt()
        frameAway(bioFrame)
        frameCall(homeFrame)
    })

    //? Mini alert animate

    Array.from(queryAll('.option')).forEach(opt => {
        opt.addEventListener('click', (e) => {
            if(e.target.id == 'projetos') return
            miniAlert.classList.add('minialert-show')
            setTimeout(() => {
                miniAlert.classList.remove('minialert-show')
            }, 3000)
        })
    })

    //* FUNCTIONS

    function alertBTNs() {
        showOpt()
        frameAway(alertFrame)
        frameCall(homeFrame)
    }

    function showOpt() {
        queryAll('.option').forEach(opt => {
            opt.classList.add('show')
        })
    }

    function hideOpt() {
        queryAll('.option').forEach(opt => {
            opt.classList.remove('show')
        })
    }

    function frameAway(el) {
        el.classList.add('moved-left')
        el.classList.remove('moved-right')
        setTimeout(() => {
            el.classList.remove('moved-left')
        }, 3500);
    }

    function frameCall(el) {
        el.classList.add('moved-right')
    }

    function cleanConteudoBox() {
        Array.from(conteudoBox).map(child => { child.classList.remove('show') })
    }
}
