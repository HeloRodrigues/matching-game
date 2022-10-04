import CardGame from "../CardGame";
import "./style.css";

const CardFrontBack = () => {
  return /*html */ `
        <article class = "card-front-back">
        <div class ="card-front">
         ${CardGame()}
        </div>
        <div class= "card-back">
          ${CardGame("logo-javascript")}
        </div>
        </article>
    `;
};

export default CardFrontBack;
