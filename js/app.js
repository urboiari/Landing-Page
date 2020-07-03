// GLOBAL VARIABLES
const sectionsRaw = document.querySelectorAll('.section');
let navBar = document.querySelector('nav');
let sections = [];
let currentSection = 'none';

// BUILD NAV
// Extract section ids into an empty array
function getSections() {
  let sectionsArray = Array.from(sectionsRaw);
  for (let i = 0; i < sectionsArray.length; i ++) {
    const section = sectionsArray[i].id;
    sections.push(section);
  }
}

// Build nav HTML based on section ids
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
    li.insertAdjacentHTML('beforeend', '<a href="#' + sections[i] + '-top">' + sections[i] + '</a>');
    ul.appendChild(li);
  }
}

// Run functions and locate links for scrolling
getSections();
buildList(navBar);
const links = document.querySelectorAll('nav ul a');

// ACTIVE SECTIONS
// Creates a box on the top of viewport that acts as a checker for a passed element
function topOfViewport(element) {
  const check = element.getBoundingClientRect();
  if (check.bottom >= 114 && check.top <= 400) {
    return true;
  }
  else {
    return false;
  }
}

// On scroll, identify what section and give it an outline
window.addEventListener('scroll', function(event) {
  for (var section of sections) {
    let selector = document.querySelector(`#${section}`);
    if (topOfViewport(selector)) {
      currentSection = section;
    }
  }
  for (section of sections) {
    if (currentSection == section) {
      document.querySelector(`#${section}`).style.animation = 'shadow-on 0.5s 1';
      document.querySelector(`#${section}`).style.animationFillMode = 'forwards';
      document.querySelector(`#nav-${section}`).style.animation = 'opacity-low 0.5s 1';
      document.querySelector(`#nav-${section}`).style.animationFillMode = 'forwards';
    }
    else {
      document.querySelector(`#${section}`).style.animation = 'shadow-off 0.5s 1';
      document.querySelector(`#nav-${section}`).style.animation = 'opacity-high 0.5s 1';
    }
  }

});

// NAV AUTO-SCROLLING
// Function to scroll to top of selected section (done by finding the href)
function scrollTo(e) {
  e.preventDefault();
  let href = this.getAttribute('href');
  let topPos = document.querySelector(href).offsetTop;
  scroll({
    top: topPos,
    behavior: 'smooth'
  });
}

// Add event listener to all links and run function scrollTo on click
for (const link of links) {
  link.addEventListener('click', scrollTo);
}
