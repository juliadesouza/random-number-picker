const form = document.querySelector("form");
const quantity = document.getElementById("quantity");
const start = document.getElementById("start");
const end = document.getElementById("end");

form.onsubmit = (e) => {
  e.preventDefault();
  getRandomNumbers();
};

// sanitizar entradas pra nao aceitar letras
// sanitizar entradas pra quantity nao ser negativa
function getRandomNumbers() {
  try {
    const min = Number(start.value);
    const max = Number(end.value);

    if (min >= max) {
      alert(
        "Ops! Certifique-se de que o número inicial seja menor que o número final."
      );
    }

    const numbers = [];
    for (let i = 0; i < quantity.value; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      numbers.push(randomNumber);
    }

    console.log(numbers.join("/"));
  } catch (error) {
    console.log(error);
  }
}
