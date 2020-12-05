import Card from './components/card';
import Group from './components/group';
import cardData from './data/cardData';

const root = document.getElementById('root');

cardData.forEach((group) => {
  const groupElement = new Group(group.name);
  const cards = group.items.map((item) => new Card(item));

  cards.forEach((cardNode) => {
    groupElement.addCard(cardNode.nativeElement);
  });

  root.appendChild(groupElement.nativeElement);
});
