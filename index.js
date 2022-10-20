// Write your code here!
const element = document.getElementById('main');

element.remove();

const newHeader = document.createElement("h1")
newHeader.setAttribute('id','victory');
newHeader.innerHTML ="<p>Sara is the champion</p>"

//const newHeader=document.getElementById("victory").querySelectorAll("h1");
//newHeader;
//document.body.append(h1);