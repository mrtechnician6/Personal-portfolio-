/**
 * Mrtechnician | NK Digital Services 
 * Core Scripting - 2026 Premium Edition
 */

'use strict';

/**
 * 1. CORE UTILITIES
 */
const elementToggleFunc = (elem) => elem.classList.toggle("active");

/**
 * 2. SIDEBAR LOGIC (Mobile & Desktop)
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

/**
 * 3. TESTIMONIAL MODAL (Memory Efficient)
 */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal content elements
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const toggleModal = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Open modal with dynamic content injection
testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    const avatar = this.querySelector("[data-testimonials-avatar]");
    const title = this.querySelector("[data-testimonials-title]");
    const text = this.querySelector("[data-testimonials-text]");

    modalImg.src = avatar.src;
    modalImg.alt = avatar.alt;
    modalTitle.innerHTML = title.innerHTML;
    modalText.innerHTML = text.innerHTML;

    toggleModal();
  });
});

[modalCloseBtn, overlay].forEach(elem => {
  if (elem) elem.addEventListener("click", toggleModal);
});

/**
 * 4. FILTERING SYSTEM (World-Class Animations)
 */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

// Mobile select dropdown
if (select) {
  select.addEventListener("click", () => elementToggleFunc(select));
}

const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    // Premium reveal animation logic
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Dropdown item selection
selectItems.forEach(item => {
  item.addEventListener("click", function () {
    let value = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(value);
  });
});

// Desktop button selection
let lastClickedBtn = filterBtns[0];

filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    let value = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(value);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

/**
 * 5. CONTACT FORM VALIDATION (Real-time feedback)
 */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      // Check validation and toggle button state
      formBtn.disabled = !form.checkValidity();
    });
  });
}

/**
 * 6. PAGE NAVIGATION (SPA Feel)
 */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    const targetPage = this.innerHTML.toLowerCase().trim();

    pages.forEach((page, pageIndex) => {
      if (targetPage === page.dataset.page) {
        page.classList.add("active");
        navigationLinks[pageIndex].classList.add("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        page.classList.remove("active");
        navigationLinks[pageIndex].classList.remove("active");
      }
    });
  });
});

/**
 * 7. PERFORMANCE: ENTRANCE ANIMATIONS
 * Adds an 'Oscar-winning' fade-in effect when scrolling through your works.
 */
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

filterItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "all 0.6s ease-out";
  observer.observe(item);
});
