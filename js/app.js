// Scroll to the top when user reaches bottom of the page

const scrollUp = document.querySelector('#scrollTop');
const scrollUplink = document.createElement('a');
const scrollUpText = document.createTextNode("Return To The Top");
scrollUplink.title = "Top of the page";
scrollUplink.href = "#top";
scrollUp.appendChild(scrollUplink);
scrollUplink.appendChild(scrollUpText);
scrollUp.style.cssText = 'text-align:center; font-size: 1.5em'; // Text styling

// Navigation items, By adding new section to the html file it will be added dynamically to the Nav.

let navbarList = document.getElementById("navbar__list"),
    sections = document.getElementById("main__element").getElementsByTagName("section");

navbarList.insertAdjacentHTML(
    'afterbegin',
    Array.from(sections).map(
        e => {
        // ONLY section name will be returned
        let sectionName = e.getElementsByTagName("h2")[0].innerText;
        return `
        <li>
            <a title="${sectionName}" href="#${sectionName.toLowerCase().replace(" ", "")}">${sectionName}</a>
        </li>`;}
    )
    .join("")
);

// Event Listener

const eventHeader = document.querySelector('main');

eventHeader.addEventListener('click', function () {
  console.log("The main was clicked!")
});

// Scroll Smooth Effect 

const links = document.querySelectorAll(".page__header ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
  // When click on the Link
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  // Adding smooth effect when scroll to the view port 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

// Active state to navigation item

window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav ul a[href="#${id}"]`).parentElement.classList.add('active'); // Add active class
      } else {
        document.querySelector(`nav ul a[href="#${id}"]`).parentElement.classList.remove('active'); // Remove active class
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
  
});
