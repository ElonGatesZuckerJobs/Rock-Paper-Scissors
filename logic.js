

// Function to load the HTML before JavaScript.
document.addEventListener("DOMContentLoaded", function(event) { 

  // Player's guide
  console.log("\n0 = Rock\n1 = Paper\n2 = Scissors\n ");

  // Functions to obtain the player's choice
  function playerChoice() {
    return parseInt(prompt("Choose a number: 0, 1 or 2?"))
  };

  // Functions to obtain the computer's choice
  function computerChoice() {
    return Math.floor(Math.random() * 3);
  };

  // Function that loops the game and evaluates the rounds
  function game() {
    // Scores
    let playerScore = 0;
    let computerScore = 0;  

    // As long as none of the scores is equal to 3
    while (playerScore <= 2 && computerScore <= 2) {
      const player = playerChoice();
      const computer = computerChoice();

      // Function to show choices and scores
      function choicesAndScores() {
        return console.log(`\nPlayer choice = ${player}\nComputer choice = ${computer}\n\nPlayer score: ${playerScore} | Computer score: ${computerScore}\n `);
      };

      // Player = Rock
      if (player === 0) {

        // Computer = Rock
        if (computer === 0) {
          console.log("Draw");
        }
        
        // Computer = Paper
        else if (computer === 1) {
          computerScore++;
          choicesAndScores();
        }
        
        // Computer = Scissors
        else if (computer === 2) {
          playerScore++;
          choicesAndScores();
        };

      } 
      
      // Player = Paper
      else if (player === 1) {

        // Computer = Rock
        if (computer === 0) {
          playerScore++;
          choicesAndScores();
        }
        
        // Computer = Paper
        else if (computer === 1) {
          console.log("Draw");
        }
        
        // Computer = Scissors
        else if (computer === 2) {
          computerScore++;
          choicesAndScores();
        };
      
      }

      // Player = Scissors
      else if (player === 2) {
        
        // Computer = Rock
        if (computer === 0) {
          computerScore++;
          choicesAndScores();
        }

        // Computer = Paper
        else if (computer === 1) {
          playerScore++;
          choicesAndScores();
        }

        // Computer = Scissors
        else if (computer === 2) {
          console.log("Draw");
        };
      } 
      else {
        console.error("Choose a valid number!")
      };
    };

    // Victory message
    if (playerScore === 3) {
      console.log("PLAYER WINS")
    } else {
      console.log("COMPUTER WINS")
    }
  };

  // Function call
  game();

});