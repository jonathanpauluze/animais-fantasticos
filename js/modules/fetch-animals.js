import NumbersAnimation from './numbers-animation.js';

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal-number');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  const numbersGrid = document.querySelector(target);
  function renderAnimal(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }

  function animateNumbers() {
    const numbersAnimation = new NumbersAnimation({
      numbers: '[data-number]',
      observerTarget: '.numbers',
      observerClass: 'active',
    });
    numbersAnimation.init();
  }

  async function createAnimals() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach(animal => renderAnimal(animal));
      animateNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}
