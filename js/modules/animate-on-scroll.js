export default class AnimateOnScroll {
  constructor({ sections }) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.checkDistances = this.checkDistances.bind(this);
  }

  getDistances() {
    this.distances = [...this.sections].map((section) => {
      const offset = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(offset) - this.halfWindow,
      };
    });
  }

  checkDistances() {
    this.distances.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('active');
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active');
      }
    });
  }

  destroy() {
    window.removeEventListener('scroll', this.checkDistances);
  }

  init() {
    if (this.sections.length) {
      this.getDistances();
      this.checkDistances();
      window.addEventListener('scroll', this.checkDistances);
    }

    return this;
  }
}
