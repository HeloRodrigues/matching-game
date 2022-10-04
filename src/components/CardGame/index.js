import "./style.css";


const CardGame = (icon = "alura-pixel") => {
  return /*html */ `
   <article class="card-game">
    <img src="src/images/${icon}.png"/>
   </article>
   `;
};

export default CardGame;
