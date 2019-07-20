/************************************************
TechDegree Project 2 - List Filter and Pagination
************************************************/
/*
Global variables defined.
- (list) to store student details
- (numberOfItems). items to be displayed per page. 
*/
const list = document.getElementsByClassName('student-item cf');
const numberOfItems = 10;

// function to show 10 list items at a time and hide others.

function showPage(list, page) {
    const startIndex = (page * numberOfItems) - numberOfItems;
    const endIndex = page * numberOfItems;
    for ( let i = 0; i < list.length; i++ ) {
      if ( i < startIndex || i >= endIndex ) {      //condition to select 10 items per page. true if either of the conditions are true.
        list[i].style.display = 'none';
      } else {
        list[i].style.display = 'block';
      }
    }
}

showPage(list, 1); //function call to display first page list items when webpage loads.

//function to generate, add and append pagination buttons and their functionality.

function appendPageLinks(list) {
  const numberOfPages = Math.ceil(list.length/10); //number of pages to hold the entire list in chunks of 10.
  const mainDiv = document.querySelector('.page');
  const div = document.createElement('div');
  div.className = 'pagination';
  mainDiv.appendChild(div);

  const divUl = document.createElement('ul');
  let divLink;

  for( let i = 1; i <= numberOfPages; i++ ) {
    let divLi = document.createElement('li');
    divUl.appendChild(divLi);
    divLink = document.createElement('a');
    divLink.href = '#';
    divLink.textContent = i;
    divLi.appendChild(divLink);
    if( i === 1 ) {                           //The first button will be active when the webpage loads for the first time.
      divLink.className = 'active';
    }
  }
  div.appendChild(divUl);                     //Pagination buttons will be added to the DOM.

  div.addEventListener('click', (e) => {
    let page = parseInt(e.target.textContent); //The text value of the page will be converted to an integer.
    showPage(list, page);
    let link = div.querySelectorAll('a');
    for ( let i = 0; i < numberOfPages; i++ ) {
      link[i].className = 'inactive';
      if( i === (page - 1) ) {                //Condition to match page with the index value. Index starts from 0 and page starts from 1.
        e.target.className = 'active';        //The button clicked will be highlighted.
      }
    }
  });
}

appendPageLinks(list); //function call to add pagination functionality to the list
