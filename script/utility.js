function getElementNumValueById(elementId){
const elementText = document.getElementById(elementId).innerText;
const elementNumValue = parseInt(elementText)
return elementNumValue;
}

function setElementTextById(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value;
    }

function createSelectedSeatDiv(event){
const getDiv = document.getElementById('create-selected-seat-div')

const newDiv = document.createElement('div')
newDiv.classList.add('new-div');
getDiv.appendChild(newDiv);

const targetSeatText = event.target.innerText;
const newH3 = document.createElement('h3')
newH3.innerText = targetSeatText;
newDiv.appendChild(newH3)

const newH4 = document.createElement('h4')
newH4.innerText = 'Economy';
newDiv.appendChild(newH4)

const newP = document.createElement('p')
newP.innerText = '550';
newDiv.appendChild(newP)
}





