import "./style.css"

const ArrowDown = (currentPlayer = 1) => {
  return /*html*/ `
    <img class = "arrow-down"
         data-currentPlayer = "${currentPlayer}" 
         src = "src/images/IconArrowDown.png">
  `
}

export default ArrowDown