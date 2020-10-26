import outsideClick from './outsideclick.js';

export default class initDropdownMenu {
  constructor({ dropdownMenus, events = ['touchstart', 'click'] }) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    this.events = ['touchstart', 'click'];
    this.activeClass = 'active';

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
  
    const { currentTarget } = event;

    currentTarget.classList.add(activeClass);
    outsideClick(currentTarget, this.events, () => {
      currentTarget.classList.remove(activeClass);
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }

    return this;
  }
}
