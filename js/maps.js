const panels = document.querySelectorAll('.panel')
let currentlyPlayingAudio = null;

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}

const search = document.querySelector('.search')
const btn =  document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})