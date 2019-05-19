let red = document.querySelector('red');
let selectBody = document.body.style;
let fontColorRed = document.getElementById('red')
let fontColorBlue = document.getElementById('blue')
let fontColorPurple = document.getElementById('purple')
let fontColorGreen = document.getElementById('green')

function changeColorRed() {
    console.log('Red');
     selectBody.backgroundColor = 'red';
     fontColorRed.style.color = 'white';
     fontColorRed.style.borderColor = 'white'
}
function changeColorBlue() {
    console.log('Blue');
    selectBody.backgroundColor= 'blue';
    fontColorBlue.style.color = 'white';
    fontColorBlue.style.borderColor = 'white'
}
function changeColorPurple() {
    console.log('Purple');
    selectBody.backgroundColor = 'purple';
    fontColorPurple.style.color = 'white';
    fontColorPurple.style.borderColor = 'white'
}
function changeColorGreen() {
    console.log('Green')
    selectBody.backgroundColor = 'green';
    fontColorGreen.style.color = 'white';
    fontColorGreen.style.borderColor = 'white'
}
