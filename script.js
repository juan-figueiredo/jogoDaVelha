document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("game-board");
    const cells = document.querySelectorAll(".cell");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
  
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const index = cell.dataset.index;
        if (gameBoard[index] === "" && !checkWinner()) {
          gameBoard[index] = currentPlayer;
          cell.textContent = currentPlayer;
          if (checkWinner()) {
            alert(`Jogador ${currentPlayer} venceu!`);
          } else if (!gameBoard.includes("")) {
            alert("O jogo empatou!");
          } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
      });
    });
  
    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return true;
        }
      }
  
      return false;
    }
  });