export default function webJS() {
    const query = document.querySelector.bind(document)
    const queryAll = document.querySelectorAll.bind(document)

    //* FRAMES
    const miniAlert = query('#miniAlert')
    const bioBox = query('#bioBox')
    const contactBox = query('#contactBox')
    const referenceBox = query('#referenceBox')
    const conteudoBox = query('#conteudoBox').children

    //? projects frame

    //* variables

    const iframesSrc = [
        "https://infinity-gym.netlify.app",
        "https://xurasco.netlify.app",
        "https://spoty-siteclone.netlify.app", "https://tetrack.netlify.app",
        "https://luck-num.netlify.app", "https://key-gen.netlify.app",
        "https://astron-login.netlify.app", "https://disc-bot.netlify.app"]


    Array.from(queryAll('.project-container')).forEach(each => {
        each.addEventListener('mouseover', (e) => {
            showIframe(e.target)
        })
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

    //? Mini alert animate

    Array.from(queryAll('.option')).forEach(opt => {
        opt.addEventListener('click', (e) => {
            if (e.target.id == 'projetos') return
            miniAlert.classList.add('minialert-show')
            setTimeout(() => {
                miniAlert.classList.remove('minialert-show')
            }, 2000)
        })
    })

    //* FUNCTIONS

    function cleanConteudoBox() {
        Array.from(conteudoBox).map(child => { child.classList.remove('show') })
    }

    function showIframe(target) {
        let iframe = target.parentElement.children[1]
        let aHref = target.parentElement.children[2]

        if (iframe.src != '') return
        
        let src = iframesSrc.shift()
        iframe.src = src
        aHref.href = src
    }
}
