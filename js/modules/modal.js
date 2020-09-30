export default class Modal {
  constructor({ openButton, closeButton, modalContainer }) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.modalContainer = document.querySelector(modalContainer);

    this.toggleModalEvent = this.toggleModalEvent.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle('active');
  }

  toggleModalEvent(event) {
    event.preventDefault();
    this.toggleModal();
  }

  addModalEvents() {
    this.openButton.addEventListener('click', this.toggleModalEvent);
    this.closeButton.addEventListener('click', this.toggleModalEvent);
    this.modalContainer.addEventListener('click', this.clickOutsideModal);
  }

  clickOutsideModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  init() {
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvents();
    }

    return this;
  }
}
