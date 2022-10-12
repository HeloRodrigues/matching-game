import "./style.css"

const VersusPlayer = (content = "vs") => {
  return /*html*/ `
        <span class = "vs-player">${content}</span>
    `;
};

export default VersusPlayer;
