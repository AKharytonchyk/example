import Message from '../../models/message';

class Card {
  static get selector() {
    return '.card';
  }

  constructor(cardData) {
    const fragment = document.createElement('div');
    fragment.innerHTML = `<div class="card">
        <div class="card__title">${cardData.title}</div>
        <img class="card__image" src="${cardData.img}"></img>
        <div class="card_description">${cardData.descr}</div>
    </div>`;

    this.nativeElement = fragment.firstElementChild;
    this.message = new Message(cardData.descr);

    this.nativeElement.addEventListener('click', this.playSound.bind(this));
    this.nativeElement.addEventListener('mouseover', this.toggleCard.bind(this), true);
    this.nativeElement.addEventListener('mouseout', this.toggleCard.bind(this), true);
  }

  toggleCard() {
    this.nativeElement.classList.toggle('active');
  }

  playSound() {
    this.message.play();
  }
}

export default Card;
