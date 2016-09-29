function do_game() {
    var target = Math.floor(Math.random() * 101);
    function loop(guesses, guess) {
        if (guess == target)
            return guesses;
        else if (guess > target)
            return loop(guesses + 1, prompt("Number too large!"));
        else if (guess < target)
            return loop(guesses + 1, prompt("Number too small!"))
    }
    var firstGuess = prompt("Hello, this is a guessing game, you will only leave the " +
        "page if you guess the number!\nPlease guess the number I'm thinking of!");
    var total = loop(0, firstGuess);
    alert("You finished the game with a total of " + total + " guesses! \n You may now leave!");
}
