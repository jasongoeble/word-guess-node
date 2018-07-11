var letter = require("./letter.js");

var aWord = function ()
{
    this.letterArray = letterArray;
    this.displayWord = function ()
    {
        var stringWord = "";

        for (var i = 0; i < this.letterArray.length; i++)
        {
            //construct the string based on the status of the letters created by the word array
            //probably need to create letter variables for each letter in the 

            stringWord = stringWord + this.letterArray[i];
        }
        
        return stringWord;

    };
    this.letterGuess = function()
    {
        //call the function for the letters
    }


};