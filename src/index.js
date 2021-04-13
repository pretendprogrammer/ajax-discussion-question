const street = document.getElementById('street')
const city = document.getElementById('city')
const state = document.getElementById('state')
const postcode = document.getElementById('postcode')
const phone = document.getElementById('phone')
const cell = document.getElementById('cell')
const dob = document.getElementById('date_of_birth')
const picture = document.getElementById('profile_picture')
const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const button = document.querySelector('.btn.btn-primary')

button.addEventListener('click', getData)
console.log('line 14')

function getData() {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(object => {
    // object.results.forEach(element => {
    //   if (typeof(element) === 'object') {
    //     for (const key of object) {
    //       let allInnerKeys = Object.keys(key)
    //       console.log(allInnerKeys)
    //     }
    //   } else {
    //     let allKeys = Object.keys(element)
    //     console.log(allKeys)
    //   }
    // });
    street.innerText = object.results[0].location.street.
    cell.innerText = object.results[0].cell

  })
}