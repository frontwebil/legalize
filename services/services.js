const openModalButtons = document.querySelectorAll(".openModal");
const closeModalButton = document.getElementById("closeModalConsultating");
const modal = document.getElementById("modalConsultating");
const modalTahnkYou = document.getElementById("modalTahnkYou");

openModalButtons.forEach((el) => {
  el.addEventListener("click", () => {
    modal.classList.toggle("active");
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
      `Номер телефона: ${this.Phone.value}`,
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
        this.Phone.value = "";
        this.request.value = "";
        modalTahnkYou.classList.add("active");
        modal.classList.remove("active");
      })
      .catch((error) => {
        console.log(error);
      });
  });
