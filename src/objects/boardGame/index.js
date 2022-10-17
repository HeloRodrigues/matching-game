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
  const flipAndHideCards = ($cardsActive) => {
    $cardsActive.forEach((card) => card.classList.remove("-active"));
  };
  const swapPlayer = () => {
    const $arrowDown = document.querySelector(".arrow-down");
    const currentPlayer = $arrowDown.getAttribute("data-currentplayer");
    $arrowDown.setAttribute("data-currentplayer", currentPlayer == 1 ? 2 : 1);
  };
  window.boardGame = {};
  window.boardGame.handleClick = () => {
    const $boardGame = document.querySelector(".board-game");
    const $cardsActive = $boardGame.querySelectorAll(
      ".card-front-back.-active"
    );
    if ($cardsActive.length === 2) {
      setTimeout(() => {
        flipAndHideCards($cardsActive);
        swapPlayer();
      }, 1000);
    }
  };
  const CardsList = cards.map((card) => CardFrontBack(card.icon));
  const $htmlCards = CardsList.join("");

  return /*html*/ `
  <section class="board-game"onClick ="boardGame.handleClick()">
    ${$htmlCards}
  </section>    
  `;
};

export default BoardGame;
