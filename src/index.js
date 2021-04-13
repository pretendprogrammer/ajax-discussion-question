const elements = {}
elements.street = document.getElementById('street')
elements.city = document.getElementById('city')
elements.state = document.getElementById('state')
elements.postcode = document.getElementById('postcode')
elements.phone = document.getElementById('phone')
elements.cell = document.getElementById('cell')
elements.dob = document.getElementById('date_of_birth')
elements.picture = document.getElementById('profile_picture')
elements.fullname = document.getElementById('fullname')
elements.email = document.getElementById('email')
elements.button = document.querySelector('.btn.btn-primary')

elements.button.addEventListener('click', getData)

function getData() {
  for (element in elements) {
    if (element !== 'button') {
      elements[element].innerText = ''
    }
  }

  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(object => {
    const usableData = object.results[0]
    let streetObj = usableData.location.street
    let nameObj = usableData.name
    elements.street.append(streetObj.number + ' ' + streetObj.name)
    elements.fullname.append(`${nameObj.title} ${nameObj.first} ${nameObj.last}`)
    elements.cell.append(usableData.cell)
    elements.city.append(usableData.location.city)
    elements.state.append(usableData.location.state)
    elements.postcode.append(usableData.location.postcode)
    elements.phone.append(usableData.phone)
    elements.dob.append(usableData.dob.date.slice(0,10))
    elements.email.append(usableData.email)
    elements.picture.src = (usableData.picture.large)
  })
}