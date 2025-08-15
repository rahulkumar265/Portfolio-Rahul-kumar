// script.js

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav-list');

  // Mobile nav toggle
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        // close mobile menu if open
        if (navList.classList.contains('open')) {
          navList.classList.remove('open');
          navToggle.classList.remove('open');
        }
      }
    });
  });

  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Scroll reveal animation
  const animatedElements = document.querySelectorAll('.animate');

  const revealOnScroll = () => {
    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  };

  // Run on scroll + initial load
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

// Contact form demo
function submitForm(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Thanks! This demo does not actually send messages. Replace with your backend or email API.';
}
const texts = ["Frontend Developer", "Graphic Designer", "Web Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typed-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500); // delay before next word
    } else {
        setTimeout(type, 100);
    }
}());


document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-container");

  function showAbout() {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight - 100;

    if (sectionPos < screenPos) {
      aboutSection.classList.add("show");
    }
  }

  window.addEventListener("scroll", showAbout);
});

document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".skill-bar");

  function showSkills() {
    skillBars.forEach(bar => {
      const skillValue = bar.getAttribute("data-skill");
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight - 100;

      if (barPosition < screenPosition) {
        bar.querySelector("span").style.width = skillValue;
      }
    });
  }

  window.addEventListener("scroll", showSkills);
});



document.addEventListener("DOMContentLoaded", function () {
  const projectSection = document.querySelector(".projects-container");

  function showProjects() {
    const sectionPos = projectSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight - 100;

    if (sectionPos < screenPos) {
      projectSection.classList.add("show");
    }
  }

  window.addEventListener("scroll", showProjects);
});



document.addEventListener("DOMContentLoaded", function () {
  const coursesSection = document.querySelector(".courses-container");

  function showCourses() {
    const sectionPos = coursesSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight - 100;

    if (sectionPos < screenPos) {
      coursesSection.classList.add("show");
    }
  }

  window.addEventListener("scroll", showCourses);
});



document.addEventListener("DOMContentLoaded", function () {
  const competitionsSection = document.querySelector(".competitions-container");

  function showCompetitions() {
    const sectionPos = competitionsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight - 100;

    if (sectionPos < screenPos) {
      competitionsSection.classList.add("show");
    }
  }

  window.addEventListener("scroll", showCompetitions);
});




document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("see-more-btn");
  const list = document.getElementById("achievements-list");

  btn.addEventListener("click", function () {
    if (list.style.display === "none" || list.style.display === "") {
      list.style.display = "grid"; // show
      btn.textContent = "See Less Achievements";
    } else {
      list.style.display = "none"; // hide
      btn.textContent = "See More Achievements";
    }
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-container");
  const contactSection = document.querySelector(".contact-container");

  function showSection(section) {
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight - 100;
    if (sectionPos < screenPos) {
      section.classList.add("show");
    }
  }

  function handleScroll() {
    showSection(aboutSection);
    showSection(contactSection);
  }

  window.addEventListener("scroll", handleScroll);
});







