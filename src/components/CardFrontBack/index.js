import CardGame from "../CardGame"

const CardFrontBack = () => {
    return /*html */`
        <article class = "card-front-back">
          ${CardGame()}
          ${CardGame("logo-javascript")}
        </article>
    `
};

export default CardFrontBack;
