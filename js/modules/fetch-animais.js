import NumbersAnimation from './numbers-animation.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal-number');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numbersGrid = document.querySelector('.numbers-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numbersGrid.appendChild(divAnimal);
      });
      const numbersAnimation = new NumbersAnimation({
        numbers: '[data-number]',
        observerTarget: '.numbers',
        observerClass: 'active',
      });
      numbersAnimation.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}
