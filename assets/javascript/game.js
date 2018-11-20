    // Array of Trek alien races
var trekArray = [
                "vulcan","romulan","cardassian","ferengi","klingon","borg","changeling","q","bajoran","breen","andorian","jemhadar","betazoid","kazon"
                ];    
    // array of letters 
    var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    
    //stores chosen word
    var chosenword = "";

    //array of chosen word letters

    var chosenLetters = [];


    // # of blanks
    var underscore = [];
    
    // blanks and guesses
    var mixedGuesses = [];

    //wrong guesses

    var wrongGuesses = [];
    
    //counters

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var correctGuesses = 0;
    

    //starts things over
    function restart()

    {
        //choose random alien race from bank
        chosenword = trekArray[Math.floor(Math.random() * trekArray.length)];
        //chops word into individual letters
        chosenLetters = chosenword.split('');
        //establishes # of blanks
        underscore = chosenLetters.length;

        //reset variables

        letterGuessed = 0;
        correctGuesses = 0;
        guessesLeft = 10;
        wrongGuesses =[];
        mixedGuesses = [];
        alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        test=false;
        newGame();
    }

    function newGame()
    {
    //choose random alien race from bank
    chosenword = trekArray[Math.floor(Math.random() * trekArray.length)];
    //chops word into individual letters
    chosenLetters = chosenword.split('');
    //establishes # of blanks
    underscore = chosenLetters.length;

        //reset variables

        correctGuesses = 0;
        guessesLeft = 10;
        wrongGuesses =[];
        mixedGuesses = [];
        alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        //push underscores into guesszone
        for( var i = 0; i< underscore; i++)
        {
            mixedGuesses.push("_");
            document.getElementById("guessZone").innerHTML = mixedGuesses; 
        }
        //changes to html
        document.getElementById("guessZone").innerHTML = mixedGuesses.join(' ');
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("wrongGuess").innerHTML = wrongGuesses;

        console.log(mixedGuesses);
        
        ;
        
    }
    

    function compareLetters(userKey)
    {
        //If user picks a letter that is in word
        if(chosenword.indexOf(userKey) > -1)
        {
            for(var i = 0; i < underscore; i++)
            {
                if(chosenLetters[i] === userKey)
                {
                        correctGuesses++;
                        mixedGuesses[i] = userKey;
                        document.getElementById("guessZone").innerHTML = mixedGuesses.join(' ');
                }
            }
        }
        //If user picks a letter that is not

        else
        {
            wrongGuesses.push(userKey);
            guessesLeft--;
            //html changes
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            document.getElementById("wrongGuess").innerHTML =  wrongGuesses;
        }}

    function winOrLose()
    {
        // win conditions
        if(correctGuesses === underscore)

        {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            alert("A Winner is You!");
            restart();
        }
        else if(guessesLeft === 0)
        {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            alert("A Loser is You :(");
            restart();

        }
    }

    // ACTUALLY RUN THE GAAAAAMMME

    newGame();

    document.onkeyup = function(event)
    {
        test = true;
        var letterGuessed = event.key;
        for(var i = 0; i < alphaArray.length; i++)
        {
            if(letterGuessed === alphaArray[i] && test === true)
            {
                var splicedWord = alphaArray.splice(i,1);

                compareLetters(letterGuessed);
                winOrLose();
            }
        }
    }