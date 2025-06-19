const screenWidth = window.screen.width;

const testimonial = [
  {
    name: "Omar, 41",
    img: "images/real-clients/1.png",
    text: "Got a warehouse job in Poland. Applied for a residence permit within 3 months.",
  },
  {
    name: "James, 34",
    img: "images/real-clients/2.png",
    text: "Started a construction job in Hungary. Employer provided housing and support with residency.",
  },
  {
    name: "Omar, 41",
    img: "images/real-clients/1.png",
    text: "Got a warehouse job in Poland. Applied for a residence permit within 3 months.",
  },
  {
    name: "James, 34",
    img: "images/real-clients/2.png",
    text: "Started a construction job in Hungary. Employer provided housing and support with residency.",
  },
];

let SLIDES_PER_PAGETestimonial = 2;
if (screenWidth <= 1265) {
  SLIDES_PER_PAGETestimonial = 2;
}
if (screenWidth <= 850) {
  SLIDES_PER_PAGETestimonial = 1;
}

let currentSlideIndexTestimonial = 0;

function initTestimonialSlider() {
  const slidesContainerTestimonial = document.querySelector(".testimonial");
  const buttonPrevTestimonial = document.querySelector(
    ".testimonial-control-prev"
  );
  const buttonNextTestimonial = document.querySelector(
    ".testimonial-control-next"
  );
  const indicatorsTestimonial = document.querySelector(
    ".testimonial-indicator"
  );

  function createTestimonialBlock(person) {
    return `
      <div class="real-clients-swiper-card">
        <img src="${person.img}" alt="">
        <div class="real-clients-swiper-card-text">
            <h3 class="text-xl bold700" style="color: #E95404;text-transform: uppercase;">${person.name}</h3>
            <h4 class="text-l">${person.text}</h4>
        </div>
      </div>
    `;
  }

  function updateSlidesTestimonial() {
    const totalSlides = Math.ceil(
      testimonial.length / SLIDES_PER_PAGETestimonial
    );
    const currentSlide = document.querySelector(".swiper-slide.active");

    // Create new slide
    const newSlide = document.createElement("div");
    newSlide.className = "swiper-slide";

    const startIdx = currentSlideIndexTestimonial * SLIDES_PER_PAGETestimonial;
    const endIdx = Math.min(
      startIdx + SLIDES_PER_PAGETestimonial,
      testimonial.length
    );

    const slideContent = testimonial
      .slice(startIdx, endIdx)
      .map((person) => createTestimonialBlock(person))
      .join("");

    newSlide.innerHTML = slideContent;

    // Add new slide to container
    const slidesContainerTestimonial = document.querySelector(".swiper-slides");

    if (currentSlide) {
      // Fade out current slide
      currentSlide.style.opacity = "0";
      currentSlide.style.visibility = "hidden";

      // Wait for fade out animation
      setTimeout(() => {
        currentSlide.remove();
        slidesContainerTestimonial.appendChild(newSlide);

        // Trigger reflow
        void newSlide.offsetWidth;

        // Add active class to trigger fade in
        newSlide.classList.add("active");
      }, 200);
    } else {
      slidesContainerTestimonial.appendChild(newSlide);
      setTimeout(() => {
        newSlide.classList.add("active");
      }, 0);
    }

    updatePaginationTestimonial(totalSlides);
  }

  function updatePaginationTestimonial(totalSlides) {
    indicatorsTestimonial.innerHTML = "";

    if (totalSlides <= 5) {
      for (let i = 0; i < totalSlides; i++) {
        addPageButtonTestimonial(i);
      }
    } else {
      if (currentSlideIndexTestimonial > 2) {
        addPageButtonTestimonial(0);
        addEllipsisTestimonial();
      }

      for (
        let i = Math.max(0, currentSlideIndexTestimonial - 1);
        i <= Math.min(totalSlides - 1, currentSlideIndexTestimonial + 1);
        i++
      ) {
        addPageButtonTestimonial(i);
      }

      if (currentSlideIndexTestimonial < totalSlides - 3) {
        addEllipsisTestimonial();
        addPageButtonTestimonial(totalSlides - 1);
      }
    }
  }

  function addPageButtonTestimonial(pageNum) {
    const button = document.createElement("div");
    button.className = `indicator-swiper${
      pageNum === currentSlideIndexTestimonial ? " active" : ""
    }`;
    button.dataset.testimonial = pageNum;
    button.textContent = pageNum + 1;
    indicatorsTestimonial.appendChild(button);
  }

  function addEllipsisTestimonial() {
    const span = document.createElement("span");
    span.textContent = "...";
    span.className = "pagination-ellipsis";
    indicatorsTestimonial.appendChild(span);
  }

  function nextSlideTestimonial() {
    const totalSlides = Math.ceil(
      testimonial.length / SLIDES_PER_PAGETestimonial
    );
    if (currentSlideIndexTestimonial < totalSlides - 1) {
      currentSlideIndexTestimonial++;
      updateSlidesTestimonial();
    }
  }

  function prevSlideTestimonial() {
    if (currentSlideIndexTestimonial > 0) {
      currentSlideIndexTestimonial--;
      updateSlidesTestimonial();
    }
  }

  // Touch events
  let startX, endX;

  function handleTouchStartTestimonial(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchMoveTestimonial(event) {
    endX = event.touches[0].clientX;
  }

  function handleTouchEndTestimonial() {
    if (!endX) return;

    const deltaX = endX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        nextSlideTestimonial();
      } else {
        prevSlideTestimonial();
      }
    }
  }

  // Event Listeners
  buttonNextTestimonial.addEventListener("click", nextSlideTestimonial);
  buttonPrevTestimonial.addEventListener("click", prevSlideTestimonial);

  indicatorsTestimonial.addEventListener("click", (event) => {
    const clickedIndicator = event.target;
    if (clickedIndicator.classList.contains("indicator-swiper")) {
      currentSlideIndexTestimonial = parseInt(
        clickedIndicator.dataset.testimonial,
        10
      );
      updateSlidesTestimonial();
    }
  });

  slidesContainerTestimonial.addEventListener(
    "touchstart",
    handleTouchStartTestimonial
  );
  slidesContainerTestimonial.addEventListener(
    "touchmove",
    handleTouchMoveTestimonial
  );
  slidesContainerTestimonial.addEventListener(
    "touchend",
    handleTouchEndTestimonial
  );

  // Initial render
  updateSlidesTestimonial();
}

document.addEventListener("DOMContentLoaded", initTestimonialSlider);

const AccordeonTopButton = document.querySelectorAll(
  ".accordeon-item-top-button"
);

AccordeonTopButton.forEach((el) => {
  el.addEventListener("click", () => {
    const content = el.nextElementSibling;
    const img = el.lastElementChild;
    img.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingTop = "0px";
    } else {
      content.style.paddingTop = "10px";
      content.style.maxHeight = content.scrollHeight + 10 + "px";
    }
  });
});

const burgerButton = document.querySelector(".custom-burger");
const slidingMenu = document.querySelector(".sliding-menu");

burgerButton.addEventListener("click", (e) => {
  burgerButton.classList.toggle("active");
  slidingMenu.classList.toggle("active");
});

const openModalButtons = document.querySelectorAll(".openModal");
const closeModalButton = document.getElementById("closeModalConsultating");
const modal = document.getElementById("modalConsultating");
const modalTahnkYou = document.getElementById("modalTahnkYou");

openModalButtons.forEach((el) => {
  el.addEventListener("click", () => {
    modal.classList.toggle("active");
    burgerButton.classList.remove("active");
    slidingMenu.classList.remove("active");
  });
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("active");
});

const TOKEN = "7418612761:AAF1bkkhodmgDKcJszW4NIQRpDDT0XChLVs";
const CHAT_ID = "-1002753224300";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document
  .getElementById("modalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const inputContents = [
      `<b>Заявка на консультацию</b>`,
      `Имя: ${this.name.value}`,
      `Почта: ${this.Email.value}`,
      `Запрос: ${this.request.value}`,
    ];
    let message = inputContents.join("\n");

    fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      }),
    })
      .then((res) => {
        this.name.value = "";
        this.Email.value = "";
        this.request.value = "";
        modalTahnkYou.classList.add("active");
        modal.classList.remove("active");
      })
      .catch((error) => {
        console.log(error);
      });
  });

const navLinks = document.querySelectorAll(".nav-mobile-links");

navLinks.forEach((el) => {
  el.addEventListener("click", () => {
    burgerButton.classList.remove("active");
    slidingMenu.classList.remove("active");
  });
});
