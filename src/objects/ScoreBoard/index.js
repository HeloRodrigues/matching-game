import "./style.css"
import PlayerName from "../../components/PlayerName"
import VersusPlayer from "../../components/VersusPlayer"
import PlayerScore from "../../components/PlayerScore"

const ScoreBoard = () => {
     return /*html*/ `
      <header class= "score-board">
          ${PlayerName(1)}
          ${PlayerScore(2)}
          ${VersusPlayer()}
          ${PlayerScore(1)}
          ${PlayerName(2)}
      </header>
    
    `
}

export default ScoreBoard