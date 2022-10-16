import "./style.css"

const PlayerScore = (points = 0) => {
  return /*html */ `
       <ol data-points = "${points}" class = "player-score">
         <li class = "pointer">1</li>
         <li class = "pointer">2</li>
         <li class = "pointer">3</li>
       </ol>
    `;
};

export default PlayerScore;
