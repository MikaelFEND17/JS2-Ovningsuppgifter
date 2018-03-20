import Calculation from './Calculation.js';

//Modules
//1. I denna uppgift skall du använda revealing module pattern. Skapa en js fil med en modul med
//detta pattern. Döp den till Calculation. Den skall ha 4 metoder som skall exponeras utåt. De
//skall ta emot två tal och hantera de 4 räknesätten dvs en funktion för addition, subtraktion,
//division och multiplikation. Skriv kod för att anropa alla 4 metoder efter varandra och skriv ut
//värdena på consolen.

/*
let calc = new Calculation();

console.log('1' + Calculation.Addition(4+4));
console.log('2' + calc.Addition(4+4));
console.log('3' + calc);
*/

//2. Nu skall du skapa en lösning med ES6 moduler. Skapa två js filer, en som du kallar för
//random.js och en som du kallar app.js. I den första filen lägger du en funktion som genererar ett
//slumptal (GenerateRandom). Exportera funktionen och importera sedan den till app.js. Där
//anropar du GenerateRandom och skriver ut resultatet i consolen.

//3. Vad som är vanligt i en lösning är att lägga alla funktioner som har med dataåtkomst tex
//anrop till web:apier, på ett ställe. Du skall nu skapa en modul med revealing module pattern där
//allt detta ligger. Denna skall ligga i en egen js-fil. Det skall finnas en fetchData funktion som skall
//vara privat i modulen dvs inte kunna nås utifrån. Sedan skall du ha en fil (app.js) där du lägger
//den kod som anropar api-modulen.

//4. Skapa en lösning med 2 js filer och en html sida. Döp den ena till Module1, den andra till
//Module2. Du skall nu göra en lösning med ES6 modules där module1 anropas från html sidan. I
//Module1 skapar du en funktion som anropar en funktion som finns i Module2. Returnera bara
//en sträng med texten ”Nu har vi anropat en funktion i Module2” från Module2. Skicka den
//vidare till html sidan och skriv ut den via en alert. Använd export och import på de metoderna
//för att detta skall fungera.

//5. Pröva att göra följande övning: http://ccoenraets.github.io/es6-tutorial/modules/
