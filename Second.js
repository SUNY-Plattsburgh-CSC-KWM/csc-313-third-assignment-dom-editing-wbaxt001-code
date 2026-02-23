const runGame = function() {

    // Prompt for team names
    const team1 = prompt("Enter the name of Team 1:");
    const team2 = prompt("Enter the name of Team 2:");

    // Prompt for scores (convert to numbers)
    const score1 = Number(prompt("Enter the score for " + team1 + ":"));
    const score2 = Number(prompt("Enter the score for " + team2 + ":"));

    let result;

    // Determine winner
    if (score1 > score2) {
        result = team1 + " won by a score of " + score1 + " to " + score2 + ".";
    } 
    else if (score2 > score1) {
        result = team2 + " won by a score of " + score2 + " to " + score1 + ".";
    } 
    else {
        result = "It's a tie! Both teams scored " + score1 + ".";
    }

    // Code that adds a new paragraph with a string to the "div"
    const divId = document.getElementById("results");
    const newPara = document.createElement("p");
    newPara.textContent = result;
    divId.appendChild(newPara);
}
