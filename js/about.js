const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML ='<img src="https://i.pinimg.com/736x/d3/92/5a/d3925a1a3c57fd50d4669c581ff94b8a.jpg" alt="dor">'
    title.innerHTML = 'Nak Bagus'
    excerpt.innerHTML = 'Phoenix merupakan agent terhitam kedua setelah Geraldd'
    profile_img.innerHTML = '<img src="https://i.pinimg.com/1200x/b2/a1/35/b2a1350cfb9c91b669da94de705005f6.jpg">'
    name.innerHTML = 'Yoru'
    date.innerHTML = '6 Dec 08'

    animated_bgs.forEach((bg) => bg.classList.remove('.animated-bg'))
    animated_bg_texts.forEach((bg) => classList.remove('.animated-bg-texts'))
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