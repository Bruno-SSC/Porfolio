const query = document.querySelector.bind(document)
const queryAll = document.querySelectorAll.bind(document)

const alertBTN1 = query('#alertBTN1').addEventListener('click', alertBTNs)
const alertBTN2 = query('#alertBTN2').addEventListener('click', alertBTNs)

function alertBTNs() {
    location.href = "./mobile.html"
}