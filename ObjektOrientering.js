//Objektorientering
//1. Skapa en ny klass. Döp den till Student. Den skall ha egenskaperna förnamn, efternamn,
//email och telefonnummer. Skapa properties för alla dessa egenskaper. Skapa sedan kod
//där alla värden sätts på klassen. Hämta sedan alla värden från klassen och skriv ut. Pröva
//sedan att göra samma lösning fast sätt alla värden via konstruktorn istället.


//2. Skapa en klass som heter Fordon. Ett fordon har en vikt, antal mil, bränsleförbrukning
//(per mil), ett regnummer och en färg. Skapa en metod i fordon som beräknar fordonets
//totala bränsleförbruktning. Den är i grunden antal mil * bränsleförbrukning.


//3. Du skall nu använda arv med Fordon som basklass. Skapa subklasser för en Personbil,
//Lastbil och Motorcykel. Alla dessa klasser skall göra sin egen version av basklassens
//metod för att beräkna bränsleförbrukning.
//- En personbil har en lastkapacitet som anger hur många kg det är möjligt att lasta
//bilen med. Är den lastad drar bilen 0,1 mer per mil.
//- En lastbil kan ha släp. Har den inte släp går det inte att lasta någonting. Har den släp
//och är lastad drar den 0,2 mer per mil
//- En motorcykel kan aldrig lasta något dvs bränsleförbrukningen är alltid antal mil *förbrukning.
//Skapa instanser av de olika fordonen och anropa metoden för att visa hur mycket
//bränsle de förbrukar och skriv ut det på consolen.
//4. Ofta får man väldigt mycket data från ett API anrop men är bara intresserad av vissa
//värden. Du skall nu göra en övning där du skapar en egen klass i din applikation som
//hanterar bara vissa värden i svaret från ett API anrop.
//- Skapa en Person klass. Klassen skall ha properties name, height, mass. Du skall
//använda den för att lägga in data som hämtas från Star Wars api:et
//- Skapa en funktion som hämtar en lista med people från api:et.
//- Loopa igenom resultatet och för varje people skapa upp en instans av din egen
//Person klass. Lägg över värdena till din klass.
//- Låt funktionen returnera en array med alla personer som fanns med i sökningen dvs
//en array med objekt av din egen Person klass.
//- Anropa funktionen och ta emot resultatet. Testa att skriva ut det. 
