class Group {
  constructor(title) {
    const fragment = document.createElement('div');
    fragment.innerHTML = `<div class="group">
        <div class="group__title">${title}</div>
        <div class="group__container"></div>
    </div>`;

    this.nativeElement = fragment.firstElementChild;
    this.container = this.nativeElement.querySelector('.group__container');
  }

  addCard(node) {
    this.container.appendChild(node);
  }
}

export default Group;
