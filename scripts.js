const form = document.querySelector("form");
const quantity = document.getElementById("quantity");
const start = document.getElementById("start");
const end = document.getElementById("end");
const toggle = document.getElementById("switch");

form.onsubmit = (e) => {
  e.preventDefault();
  const numbers = getRandomNumbers();
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

    return numbers;
  } catch (error) {
    console.log(error);
  }
}
