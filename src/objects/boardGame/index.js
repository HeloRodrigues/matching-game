import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";

const BoardGame = (amountCards) => {
  const cards = [
    { icon: "logo-html" },
    { icon: "logo-html" },
    { icon: "logo-css" },
    { icon: "logo-css" },
    { icon: "logo-javascript" },
    { icon: "logo-javascript" },
  ];

  const CardsList = cards.map((card) => CardFrontBack(card.icon));
  const $htmlCards = CardsList.join("");

  return /*html*/ `
  <section class="board-game">
    ${$htmlCards}
  </section>    
  `;
};

export default BoardGame;
