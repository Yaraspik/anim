export default class Collapsible {
  constructor(container) {
    this.container = container;
    this.button = this.container.querySelector('.widget__btn');
    this.text = this.container.querySelector('.widget__text-container');
  }

  subscribeOnEvents() {
    this.button.addEventListener('click', () => this.run());
  }

  run() {
    if (this.text.classList.contains('show')) {
      this.text.classList.add('hide');
      this.text.classList.remove('show');
      return;
    }
    this.text.classList.add('show');
    this.text.classList.remove('hide');
  }
}
