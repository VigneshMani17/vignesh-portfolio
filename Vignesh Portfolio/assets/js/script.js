'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });




// project modal
const projectOverlay = document.querySelector('[data-project-overlay]');
const projectModalImg = document.querySelector('[data-project-modal-img]');
const projectModalCategory = document.querySelector('[data-project-modal-category]');
const projectModalTitle = document.querySelector('[data-project-modal-title]');
const projectModalDesc = document.querySelector('[data-project-modal-desc]');
const projectCloseBtns = document.querySelectorAll('[data-project-close]');

document.querySelectorAll('[data-project-btn]').forEach(btn => {
  btn.addEventListener('click', function () {
    projectModalImg.src = this.dataset.img;
    projectModalImg.alt = this.dataset.title;
    projectModalCategory.textContent = this.dataset.category;
    projectModalTitle.textContent = this.dataset.title;
    projectModalDesc.textContent = this.dataset.desc;
    projectOverlay.classList.add('active');
  });
});

projectCloseBtns.forEach(btn => btn.addEventListener('click', () => projectOverlay.classList.remove('active')));
projectOverlay.addEventListener('click', e => { if (e.target === projectOverlay) projectOverlay.classList.remove('active'); });



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }

    for (let k = 0; k < navigationLinks.length; k++) {
      navigationLinks[k].classList.remove("active");
    }
    this.classList.add("active");

  });
}