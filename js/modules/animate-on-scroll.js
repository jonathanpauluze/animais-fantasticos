export default class AnimateOnScroll {
  constructor({ sections }) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.halfWindow) < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
