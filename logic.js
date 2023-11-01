

// Function to load the HTML before JavaScript.
document.addEventListener("DOMContentLoaded", function(event) {

  // Functions to obtain the player's choice
  function playerChoice() {
    return prompt("Paper, Rock or Scissors?").toLowerCase();
  };

  // Functions to obtain the computer's choice
  function computerChoice() {
    a = Math.floor(Math.random() * 3);

    // Return Rock, Paper or Scissors based on the random number generated
    if (a === 0) {
      return "rock";
    } else if (a === 1) {
      return "paper";
    } else if (a === 2) {
      return "scissors";
    }
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
        return console.log(`\nPlayer choice = ${player}\nComputer choice = ${computer}\n\nPlayer - ${playerScore} | ${computerScore} - Computer\n `);
      };

      // Player = Rock
      if (player === "rock") {

        // Computer = Rock
        if (computer === "rock") {
          console.log("Draw");
        }
        
        // Computer = Paper
        else if (computer === "paper") {
          computerScore++;
          choicesAndScores();
        }
        
        // Computer = Scissors
        else if (computer === "scissors") {
          playerScore++;
          choicesAndScores();
        };

      } 
      
      // Player = Paper
      else if (player === "paper") {

        // Computer = Rock
        if (computer === "rock") {
          playerScore++;
          choicesAndScores();
        }
        
        // Computer = Paper
        else if (computer === "paper") {
          console.log("Draw");
        }
        
        // Computer = Scissors
        else if (computer === "scissors") {
          computerScore++;
          choicesAndScores();
        };
      
      }

      // Player = Scissors
      else if (player === "scissors") {
        
        // Computer = Rock
        if (computer === "rock") {
          computerScore++;
          choicesAndScores();
        }

        // Computer = Paper
        else if (computer === "paper") {
          playerScore++;
          choicesAndScores();
        }

        // Computer = Scissors
        else if (computer === "scissors") {
          console.log("Draw");
        };
      } 
    };

    // Victory message
    if (playerScore === 3) {
      console.log("\nPLAYER WINS\n ")
    } else {
      console.log("\nCOMPUTER WINS\n ")
    }
  };

  // Function call
  game();
  
});