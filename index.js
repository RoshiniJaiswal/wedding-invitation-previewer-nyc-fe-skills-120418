const invitation = document.querySelector(".invitation")
const firstName = document.querySelector(".First-Name")
const firstNameinvite = document.querySelector(".First-Name-invite")
firstName.addEventListener('keyup', logKeyfirstName);
function logKeyfirstName(e) {
 firstNameinvite.innerText = firstName.value;
 console.log(invitation)
}

const secondName  = document.querySelector(".Second-Name")
const secondNameinvite = document.querySelector(".Second-Name-invite")
secondName.addEventListener('keyup', logKeysecondName);
function logKeysecondName(e) {
 secondNameinvite.innerText = secondName.value;
 console.log(secondName)
}

const lastName = document.querySelector(".Last-Name")
const lastNameinvite = document.querySelector(".Last-Name-invite")
lastName.addEventListener('keyup', logKeylastName);
function logKeylastName(e) {
 lastNameinvite.innerText = lastName.value;
 console.log(LastName)
}
const date = document.querySelector(".Date")
const dateinvite = document.querySelector(".Date-invite")
date.addEventListener('keyup', logKeyDate);
function logKeyDate(e) {
 dateinvite.innerText = date.value;
 console.log(Date)
}
const weddingLocation = document.querySelector(".Wedding-Location")
const weddingLocationinvite = document.querySelector(".Wedding-Location-invite")
weddingLocation.addEventListener('keyup', logKeyWeddingLocation);
 function logKeyweddingLocation(e) {
 weddingLocationinvite.innerText = weddingLocation.value;
 console.log(WeddingLocation)
}