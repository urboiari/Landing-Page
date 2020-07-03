// GLOBAL VARIABLES
const sectionsRaw = document.querySelectorAll('.section');
let navBar = document.querySelector('nav');
let sections = []
let currentSection = 'none'

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function getSections() {
  let sectionsArray = Array.from(sectionsRaw);
  for (let i = 0; i < sectionsArray.length; i ++) {
    const section = sectionsArray[i].id
    sections.push(section);
  }
}

function buildList(element) {
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
const links = document.querySelectorAll('nav ul a');

// Add class 'active' to section when near top of viewport
(window.innerHeight || document.documentElement.clientHeight)
function topOfViewport(element) {
  const check = element.getBoundingClientRect();
  if (check.bottom >= 114 && check.top <= 400) {
    return true;
  }
  else {
    return false;
  }
}

window.addEventListener('scroll', function(event) {
  for (section of sections) {
    let selector = document.querySelector(`#${section}`);
    if (topOfViewport(selector)) {
      currentSection = section;
    }
  }
  for (section of sections) {
    if (currentSection == section) {
      document.querySelector(`#${section}`).style.boxShadow = '0 0 50px 50px #E8E8E8';
    }
    else {
      document.querySelector(`#${section}`).style.boxShadow = 'none';
    }
  }

});

// Scroll to anchor ID using scrollTo event
for (const link of links) {
  link.addEventListener('click', scrollTo);
}

function scrollTo(e) {
  e.preventDefault()
  let href = this.getAttribute('href');
  let topPos = document.querySelector(href).offsetTop;
  scroll({
    top: topPos,
    behavior: 'smooth'
  });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
