// const screenWidth = window.screen.width;

// const testimonial = [
//   {
//     text: "Обратился по рекомендации друга. Ребята всё чётко объяснили, помогли собрать документы и уже через два месяца я получил ВНЖ в Польше. Без лишней бюрократии и нервов. Спасибо за поддержку на каждом этапе!",
//     img: "/images/our-clients/1.png",
//     title: "Алексей Ковальчук , 35 лет",
//     description: "ВНЖ в Польше за 2 месяца через бизнес-иммиграцию.",
//   },
//   {
//     text: "Очень рад, что выбрал именно эту компанию. У меня был сложный случай, но специалисты нашли оптимальное решение и оформили всё легально. Теперь я живу и работаю в Словакии официально.",
//     img: "/images/our-clients/2.png",
//     title: "Игорь Демидов , 42 года",
//     description: "ВНЖ в Польше за 2 месяца через бизнес-иммиграцию.",
//   },
//   {
//     text: "Оформление ВНЖ в Чехии прошло быстро и без подводных камней. Особенно понравилось, что всегда были на связи и заранее предупреждали обо всех нюансах. Рекомендую всем, кто хочет уехать по-человечески.",
//     img: "/images/our-clients/3.png",
//     title: "Сергей Антонов , 29 лет",
//     description: "ВНЖ в Польше за 2 месяца через бизнес-иммиграцию.",
//   },
//   // {
//   //   text:"Мне помогли не только с документами, но и с открытием банковского счёта, жильём и переводами. Комплексный подход чувствуется. Сейчас уже обживаюсь в Румынии, всё благодаря вам.",
//   //   img:'/images/our-clients/1.png',
//   //   title:'Владимир Ткаченко , 50 лет',
//   //   description:"ВНЖ в Польше за 2 месяца через бизнес-иммиграцию."
//   // },
//   // {
//   //   text:"Честно говоря, не ожидал такого уровня сервиса. Приятно удивлён. Легализация в Венгрии прошла быстро, постоянно получал обновления по статусу дела. Спасибо команде за профессионализм и честность.",
//   //   img:'/images/our-clients/1.png',
//   //   title:'Максим Соловей , 31 год',
//   //   description:"ВНЖ в Польше за 2 месяца через бизнес-иммиграцию."
//   // },
// ];

// let SLIDES_PER_PAGETestimonial = 3;
// if (screenWidth <= 1265) {
//   SLIDES_PER_PAGETestimonial = 2;
// }
// if (screenWidth <= 850) {
//   SLIDES_PER_PAGETestimonial = 1;
// }

// let currentSlideIndexTestimonial = 0;

// function initTestimonialSlider() {
//   const slidesContainerTestimonial = document.querySelector(".testimonial");
//   const buttonPrevTestimonial = document.querySelector(
//     ".testimonial-control-prev"
//   );
//   const buttonNextTestimonial = document.querySelector(
//     ".testimonial-control-next"
//   );
//   const indicatorsTestimonial = document.querySelector(
//     ".testimonial-indicator"
//   );

//   function createTestimonialBlock(person) {
//     return `
//       <div class="our-clients-swiper-card">
//         <p class="our-clients-swiper-card-text">
//           ${person.text}
//         </p>
//         <div class="our-clients-flex-line">
//         <div class="our-clients-swiper-card-line"></div>
//         <div class="our-clients-swiper-card-info">
//           <img src="${person.img}" alt="">
//           <div class="our-clients-swiper-card-info-text">
//             <h4>${person.title}</h4>
//             <p>${person.description}</p>
//           </div>
//         </div>
//         </div>
//       </div>
//     `;
//   }

//   function updateSlidesTestimonial() {
//     const totalSlides = Math.ceil(
//       testimonial.length / SLIDES_PER_PAGETestimonial
//     );
//     const currentSlide = document.querySelector(".swiper-slide.active");

//     // Create new slide
//     const newSlide = document.createElement("div");
//     newSlide.className = "swiper-slide";

//     const startIdx = currentSlideIndexTestimonial * SLIDES_PER_PAGETestimonial;
//     const endIdx = Math.min(
//       startIdx + SLIDES_PER_PAGETestimonial,
//       testimonial.length
//     );

//     const slideContent = testimonial
//       .slice(startIdx, endIdx)
//       .map((person) => createTestimonialBlock(person))
//       .join("");

//     newSlide.innerHTML = slideContent;

//     // Add new slide to container
//     const slidesContainerTestimonial = document.querySelector(".swiper-slides");

//     if (currentSlide) {
//       // Fade out current slide
//       currentSlide.style.opacity = "0";
//       currentSlide.style.visibility = "hidden";

//       // Wait for fade out animation
//       setTimeout(() => {
//         currentSlide.remove();
//         slidesContainerTestimonial.appendChild(newSlide);

//         // Trigger reflow
//         void newSlide.offsetWidth;

//         // Add active class to trigger fade in
//         newSlide.classList.add("active");
//       }, 200);
//     } else {
//       slidesContainerTestimonial.appendChild(newSlide);
//       setTimeout(() => {
//         newSlide.classList.add("active");
//       }, 0);
//     }

//     updatePaginationTestimonial(totalSlides);
//   }

//   function updatePaginationTestimonial(totalSlides) {
//     indicatorsTestimonial.innerHTML = "";

//     if (totalSlides <= 5) {
//       for (let i = 0; i < totalSlides; i++) {
//         addPageButtonTestimonial(i);
//       }
//     } else {
//       if (currentSlideIndexTestimonial > 2) {
//         addPageButtonTestimonial(0);
//         addEllipsisTestimonial();
//       }

//       for (
//         let i = Math.max(0, currentSlideIndexTestimonial - 1);
//         i <= Math.min(totalSlides - 1, currentSlideIndexTestimonial + 1);
//         i++
//       ) {
//         addPageButtonTestimonial(i);
//       }

//       if (currentSlideIndexTestimonial < totalSlides - 3) {
//         addEllipsisTestimonial();
//         addPageButtonTestimonial(totalSlides - 1);
//       }
//     }
//   }

//   function addPageButtonTestimonial(pageNum) {
//     const button = document.createElement("div");
//     button.className = `indicator-swiper${
//       pageNum === currentSlideIndexTestimonial ? " active" : ""
//     }`;
//     button.dataset.testimonial = pageNum;
//     button.textContent = pageNum + 1;
//     indicatorsTestimonial.appendChild(button);
//   }

//   function addEllipsisTestimonial() {
//     const span = document.createElement("span");
//     span.textContent = "...";
//     span.className = "pagination-ellipsis";
//     indicatorsTestimonial.appendChild(span);
//   }

//   function nextSlideTestimonial() {
//     const totalSlides = Math.ceil(
//       testimonial.length / SLIDES_PER_PAGETestimonial
//     );
//     if (currentSlideIndexTestimonial < totalSlides - 1) {
//       currentSlideIndexTestimonial++;
//       updateSlidesTestimonial();
//     }
//   }

//   function prevSlideTestimonial() {
//     if (currentSlideIndexTestimonial > 0) {
//       currentSlideIndexTestimonial--;
//       updateSlidesTestimonial();
//     }
//   }

//   // Touch events
//   let startX, endX;

//   function handleTouchStartTestimonial(event) {
//     startX = event.touches[0].clientX;
//   }

//   function handleTouchMoveTestimonial(event) {
//     endX = event.touches[0].clientX;
//   }

//   function handleTouchEndTestimonial() {
//     if (!endX) return;

//     const deltaX = endX - startX;
//     if (Math.abs(deltaX) > 50) {
//       if (deltaX < 0) {
//         nextSlideTestimonial();
//       } else {
//         prevSlideTestimonial();
//       }
//     }
//   }

//   // Event Listeners
//   buttonNextTestimonial.addEventListener("click", nextSlideTestimonial);
//   buttonPrevTestimonial.addEventListener("click", prevSlideTestimonial);

//   indicatorsTestimonial.addEventListener("click", (event) => {
//     const clickedIndicator = event.target;
//     if (clickedIndicator.classList.contains("indicator-swiper")) {
//       currentSlideIndexTestimonial = parseInt(
//         clickedIndicator.dataset.testimonial,
//         10
//       );
//       updateSlidesTestimonial();
//     }
//   });

//   slidesContainerTestimonial.addEventListener(
//     "touchstart",
//     handleTouchStartTestimonial
//   );
//   slidesContainerTestimonial.addEventListener(
//     "touchmove",
//     handleTouchMoveTestimonial
//   );
//   slidesContainerTestimonial.addEventListener(
//     "touchend",
//     handleTouchEndTestimonial
//   );

//   // Initial render
//   updateSlidesTestimonial();
// }

// document.addEventListener("DOMContentLoaded", initTestimonialSlider);

// const AccordeonTopButton = document.querySelectorAll(
//   ".accordeon-item-top-button"
// );

// AccordeonTopButton.forEach((el) => {
//   el.addEventListener("click", () => {
//     const content = el.nextElementSibling;
//     const img = el.lastElementChild;
//     img.classList.toggle("active");

//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//       content.style.paddingTop = "0px";
//     } else {
//       content.style.paddingTop = "10px";
//       content.style.maxHeight = content.scrollHeight + 10 + "px";
//     }
//   });
// });

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
