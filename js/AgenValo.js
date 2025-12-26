if (performance.navigation.type === 1) {
    // window.location.href = 'italoading.html'; 
  }
  const boxes = document.querySelectorAll('.box');
    

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes (){
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top 


        if (boxTop < triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

// skill

const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
        
        stopSemuaSuara()

        const audio = panel.querySelector('audio')
        if (audio){
            audio.play()
        }
    })
})

function removeActiveClasses (){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
function stopSemuaSuara(){
    const audios = document.querySelectorAll('audio')
    audios.forEach(a => {
        a.pause()
        a.currentTime = 0
    })
}