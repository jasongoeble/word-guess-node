var Letter = function ()
{
    this.char = char;
    this.guessed = false;
    this.toString = function () 
    {
        if (this.guessed === true)
        {
            return this.char;
        }
        else
        {
            return "_";
        }
    };
    this.guess = function (userGuess)
    {
        if (wordToGuess.indexOf(userGuess) > -1)
        {
            this.guessed = true;
        }
        else
        {}
    };
};