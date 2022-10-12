import "./style.css"
import PlayerName from "../../components/PlayerName"
import VersusPlayer from "../../components/VersusPlayer"

const ScoreBoard = () => {
     return /*html*/ `
      <header class= "score-board">
          ${PlayerName(1)}
          ${VersusPlayer()}
          ${PlayerName(2)}
      </header>
    
    `
}

export default ScoreBoard