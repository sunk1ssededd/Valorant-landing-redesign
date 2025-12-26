const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://i.pinimg.com/1200x/f3/a2/52/f3a2520e3bb9a48d121920b0c7e28f53.jpg',
    text:
      "Awalnya coba-coba, eh malah jadi main tiap hari. Sistem leveling-nya bikin penasaran terus mau naik ke tahap berikutnya.",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://i.pinimg.com/1200x/a1/3d/7f/a13d7f2dd23616fb100e5f78f35ae1b4.jpg',
    text:
      'Keren banget! Musik latarnya bikin suasana makin hidup, rasanya kayak masuk ke dunia game-nya langsung',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://i.pinimg.com/1200x/35/e0/1d/35e01d47047e7c16aadadd15e2b411ef.jpg',
    text:
      "Gameplay simpel tapi nagih. Cocok banget buat semua umur, nggak bikin ribet.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://i.pinimg.com/736x/a6/90/17/a69017e2656a6c724d6f1d5953d21948.jpg',
    text:
      "Event-event di dalam game selalu fresh. Jadi nggak pernah bosan karena selalu ada hal baru yang bisa dicoba.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://i.pinimg.com/736x/c1/d5/0a/c1d50ada5225f28ad47d6b1a70d5c8bb.jpg',
    text:
      "Saya suka banget sama karakternya, detail desainnya keren dan punya ciri khas masing-masing.",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://i.pinimg.com/1200x/d8/aa/a5/d8aaa54ffe2f8f2e91b4cfd564e2e407.jpg',
    text:
      'Game ringan tapi grafisnya mantap. Jalan di HP kentang pun masih mulus tanpa nge-lag.',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://i.pinimg.com/1200x/ae/d5/c9/aed5c9b586f04c9c81bfea181c779805.jpg',
    text:
      'Developer-nya responsif, sering update dan dengerin masukan player. Jarang banget ada game yang kayak gini.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)