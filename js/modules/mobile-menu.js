import outsideClick from './outsideclick.js';

export default class MobileMenu {
  constructor({ menuButton, menuList, events = ['click', 'touchstart'] }) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.events = events;
    this.activeClass = 'active';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMobileMenuEvents() {
    this.events.forEach(event => this.menuButton.addEventListener(event, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMobileMenuEvents();
    }

    return this;
  }
}
