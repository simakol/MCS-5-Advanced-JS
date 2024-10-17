export default class ButtonService {
  static HIDDEN_CLASS = 'is-hidden';

  constructor(buttonEl) {
    this.button = buttonEl;
    this.prevText = '';
  }

  disable() {
    this.button.disabled = true;
  }

  enable() {
    this.button.disabled = false;
  }

  hide() {
    this.button.classList.add(ButtonService.HIDDEN_CLASS);
  }

  show() {
    this.button.classList.remove(ButtonService.HIDDEN_CLASS);
  }

  setLoading() {
    this.disable();
    this.prevText = this.button.textContent;
    this.button.textContent = 'Loading...';
  }

  setNormal() {
    this.button.textContent = this.prevText;
    this.enable();
  }
}
