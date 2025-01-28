const form = document.querySelector("form");
const quantity = document.getElementById("quantity");
const start = document.getElementById("start");
const end = document.getElementById("end");
const toggle = document.getElementById("switch");

form.onsubmit = (e) => {
  e.preventDefault();
  getRandomNumbers();
};

function getRandomNumbers() {
  try {
    const noRepeat = toggle.checked;
    const min = Number(start.value);
    const max = Number(end.value);

    if (min >= max) {
      return alert(
        "Ops! Certifique-se de que o número inicial seja menor que o número final."
      );
    }

    if (noRepeat && max - min < quantity.value) {
      return alert(
        `Ops! Não é possível gerar ${quantity.value} números não repetidos neste intervalo.`
      );
    }

    const numbers = [];

    while (numbers.length < quantity.value) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      if (noRepeat && numbers.includes(randomNumber)) {
        continue;
      }

      numbers.push(randomNumber);
    }

    createCardsForNumber(numbers);
  } catch (error) {
    console.log(error);
  }
}

function createCardsForNumber(numbers) {
  const formContainer = document.getElementById("content-form");
  const resultContainer = document.getElementById("result");
  formContainer.style.display = "none";
  resultContainer.style.display = "block";

  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  let showBtn = 0;
  for (let i = 0; i < numbers.length; i++) {
    const card = document.createElement("div");
    card.classList.add("random-number");
    card.style.setProperty("--delay", `${i * 3}s`);

    const span = document.createElement("span");
    span.textContent = numbers[i];

    card.append(span);
    cardsContainer.append(card);
    showBtn += i * 4;
  }

  const repeatBtn = document.getElementById("repeat-btn");
  repeatBtn.style.setProperty("--delay-show-btn", `${showBtn}s`);
}
