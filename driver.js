//Driver Script

// Globals
const DATA_URL = 'https://docs.google.com/spreadsheets/d/1IpKNy-GqzDhjSuKx9nzYrM1Udzoc4dJJW17dmZge5Ho/edit?usp=sharing'
let people;

function init() {
  initDataRetrevial();
}

// Initializes retrieval of people data. 
function initDataRetrevial() {
    Tabletop.init( { key: DATA_URL,
                     callback: startPage,
                     simpleSheet: true } )
}

function startPage(data, tabletop) {
  // Store the data in variables scoped to this file.
  storePeopleData(data);
}
  
function storePeopleData(data){
  people = data;
}

function renderData(parentElement) {
	while (parentElement.firstChild) {
    	parentElement.removeChild(parentElement.firstChild);
  	}
  	for (var i = 0; i < people.length; i++) {
		addPersonEntery(parentElement,i);
	}
}

/*
<div class="personWrapper">
<div class="name">
</div>
<div class="blurb">
</div>
<div class="linkedin">
</div>
<div class="email">
</div>
</div>
*/

function addPersonEntery(parentElement, dataId) {
  const personWrapper = document.createElement("div");
  personWrapper.classList.add("personWrapper");
  personWrapper.classList.add("sliding");

  const name = document.createElement("div");
  name.classList.add("name");
  name.innerHTML = people[dataId].NAME;	

  const blurb = document.createElement("div"); 
  blurb.classList.add("blurb");
  blurb.innerHTML = people[dataId].SHORTBLURB;


  const linkedin = document.createElement("a");
  linkedin.classList.add("icon");

  const socialRow = document.createElement("div");
  socialRow.classList.add("socialRow");

  const linkedinSymbol = document.createElement("i");
  linkedinSymbol.classList.add("fab");
  linkedinSymbol.classList.add("fa-linkedin-in");
  linkedin.href = people[dataId].LINKEDIN;	
  linkedin.appendChild(linkedinSymbol);

  const email = document.createElement("div"); 
  email.classList.add("icon");
  const emailSymbol = document.createElement("i");
  emailSymbol.classList.add("fas");
  emailSymbol.classList.add("fa-envelope");
  email.href = "mailto:" + people[dataId].EMAIL;	
  email.appendChild(emailSymbol);

  personWrapper.appendChild(name);
  personWrapper.appendChild(blurb);
  socialRow.appendChild(linkedin);
  socialRow.appendChild(email);
  personWrapper.appendChild(socialRow);
    
  parentElement.appendChild(personWrapper);
}

function showTeam() {
  // Render the team data.
  var targetWrapper = document.getElementById("peopleWrapper");
  renderData(targetWrapper);
}

particlesJS.load('particles-js', 'girderSoft.json');

//onload setup
window.onload = function(e){ 
  const demoDownloadButton = document.getElementById("demoDownloadButton");
  const teamDisplayButton = document.getElementById("teamDisplayButton");
  const downloadRow = document.getElementById("downloadRow");

  demoDownloadButton.onclick = function() { 
    makeInactive(demoDownloadButton);
    makeVisible(downloadRow);
  };

  teamDisplayButton.onclick = function() {
    showTeam(downloadRow);
    makeInactive(teamDisplayButton);
  }

  const makeInactive = function(elementRef) {
    elementRef.classList.add('inactive');
  }

  const makeVisible = function(elementRef) {
    elementRef.classList.add('visible');
  }

}

window.addEventListener('DOMContentLoaded', init);




