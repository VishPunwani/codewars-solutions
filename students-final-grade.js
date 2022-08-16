/* In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

 */




/* MY SOLUTION */

function rpsls(pl1,pl2){
 
    let player1 = pl1
    let player2 = pl2
    let draw = pl1 === pl2
    
    
    if (player1 === "scissors" && player2 === "paper"){
      return "Player 1 Won!" 
    } else if (player1 === "paper" && player2 === "rock"){
      return "Player 1 Won!"
    } else if (player1 === "rock" && player2 === "lizard"){
      return "Player 1 Won!"
    } else if (player1 === "lizard" && player2 === "spock"){
      return "Player 1 Won!"
    } else if (player1 === "scissors" && player2 === "lizard"){
      return "Player 1 Won!"
    } else if (player1 === "lizard" && player2 === "paper"){
      return "Player 1 Won!"
    } else if (player1 === "paper" && player2 === "spock"){
      return "Player 1 Won!"
    } else if (player1 === "spock" && player2 === "rock"){
      return "Player 1 Won!"
    } else if (player1 === "rock" && player2 === "scissors"){
      return "Player 1 Won!"
    } else if (player1 === "spock" && player2 === "scissors"){
      return "Player 1 Won!"
    
    } else if (player2 === "scissors" && player1 === "paper"){
      return "Player 2 Won!"
    } else if (player2 === "paper" && player1 === "rock"){
      return "Player 2 Won!"
    } else if (player2 === "rock" && player1 === "lizard"){
      return "Player 2 Won!"
    } else if (player2 === "lizard" && player1 === "spock"){
      return "Player 2 Won!"
    } else if (player2 === "scissors" && player1 === "lizard"){
      return "Player 2 Won!"
    } else if (player2 === "lizard" && player1 === "paper"){
      return "Player 2 Won!"
    } else if (player2 === "paper" && player1 === "spock"){
      return "Player 2 Won!"
    } else if (player2 === "spock" && player1 === "rock"){
      return "Player 2 Won!"
    } else if (player2 === "rock" && player1 === "scissors"){
      return "Player 2 Won!"
    } else if (player2 === "spock" && player1 === "scissors"){
      return "Player 2 Won!"
   
    } else if (draw){
      return "Draw!"
   } else if (draw){
      return "Draw!"
   } else if (draw){
      return "Draw!"
   } else if (draw){
      return "Draw!"
    } else if (draw){
      return "Draw!"
    }
  }