/*var myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/chhota-ganesh.jpg') {
      myImage.setAttribute ('src','images/ganesha2.jpg');
    } else {
      myImage.setAttribute ('src','images/chhota-ganesh.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}