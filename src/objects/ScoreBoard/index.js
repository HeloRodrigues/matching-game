import "./style.css"
import PlayerName from "../../components/PlayerName"

const ScoreBoard = () => {
     return /*html*/ `
      <header class= "score-board">
          ${PlayerName(1)}
          ${PlayerName(2)}
      </header>
    
    `
}

export default ScoreBoard