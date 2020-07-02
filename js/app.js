/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/




/**
 * Define Global Variables
 *
*/
let sectionsRaw = document.querySelectorAll('.section')
let navBar = document.querySelector('nav')
let sections = []

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
getSections = () => {
  let sectionsArray = Array.from(sectionsRaw);
  for (let i = 0; i < sectionsArray.length; i ++) {
    const section = sectionsArray[i].id
    sections.push(section);
  }
  // console.log(sections);
}

buildList = (element) => {
  let ul = document.createElement('ul');
  ul.classList.add('nav-list');
  element.appendChild(ul);
  let list = element.getElementsByTagName('ul');
  console.log(typeof list);
  for (let i = 0; i < sections.length; i ++) {
    let li = document.createElement('li');
    li.setAttribute('id', 'nav-' + sections[i]);
    li.classList.add('nav-item');
    li.insertAdjacentHTML('beforeend', '<a href="#' + sections[i] + '-top">' + sections[i] + '</a>')
    ul.appendChild(li);
  }
}
getSections();
buildList(navBar);
console.log(sections);
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
