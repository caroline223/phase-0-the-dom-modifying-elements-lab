// Write your code here!

document.getElementById('main').remove();

var newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);

