
export var Calculation = (function ()
 {
    var publicAddition = function(aTal1, aTal2) {
        return aTal1 + aTal2;
    }

    var publicSubtraction = function(aTal1, aTal2) {
        return aTal1 - aTal2;
    }

    var publicMultiplication = function(aTal1, aTal2) {
        return aTal1 * aTal2;
    }
    var publicDivision = function(aTal1, aTal2) {
        return aTal1 / aTal2;
    }

    return {
        Addition: publicAddition,
        Subtraction: publicSubtraction,
        Multiplication: publicMultiplication,
        Division: publicDivision
    };
})();

//1. I denna uppgift skall du använda revealing module pattern. Skapa en js fil med en modul med
//detta pattern. Döp den till Calculation. Den skall ha 4 metoder som skall exponeras utåt. De
//skall ta emot två tal och hantera de 4 räknesätten dvs en funktion för addition, subtraktion,
//division och multiplikation. Skriv kod för att anropa alla 4 metoder efter varandra och skriv ut
//värdena på consolen.