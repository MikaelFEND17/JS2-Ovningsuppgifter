//Cookies & Web storage
//1. Skapa en html sida med en knapp. När man klickar på knappen skall det visas en alert
//som talar om hur många gånger som man klickat på knappen. För varje gång man klickar
//på knappen skall detta räknas upp dvs ”Du har klickat (en, två, tre) gånger på knappen”.
//Lös detta genom att lägga ett tal i web storage som uppdateras varje gång man klickar.

//2. Gör om uppgift 1 men lös den med en cookie istället.


//3. Ta fram en lista med planeter från Star Wars api:et. Visa det som en lista på en html
//sida. Du skall nu bygga sorterings funktionalitet till denna listan. Det skall gå att sortera
//listan i bokstavsordning samt efter planeternas storlek (diameter). Json filen med
//planetdata skall ligga i session storage under tiden dvs den skall bara hämtas när
//webbstidan laddas.


//4. Uppgiften handlar om att bygga en enkel webshop med klientkod. Du har följande JSON
//fil. Lägg ut alla produkter på en webbsida med en köp knapp efter varje produkt. När
//man klickar på knappen skall produkten läggas i en varukorg som sparas i session
//storage. Gör en gå till kassa knapp. När man klickar på den skall innehållet i varukorgen
//visas och totalpriset på beställningen summeras.
var products = {"products": [{"id": "1", "name":"Samsung Galaxy S8", "price": "5999" , "description": "Samsung S8 tar klassisk Samsung tillförlitlighet till nästa nivå med ännu mera smart och innovativ teknik."},
{ "id": "2","name":"iPhone 8", "price": "6999" ,"description": "Har skärmstorleken 4,7 tum, baksida i glas och finns i färgerna silver, guld samt rymdgrå. Nytt från föregående modell är stöd för trådlös laddning, bättre prestanda" }, 
{"id": "3", "name":"Huawei 10", "price": "6999" ,"description ": " Extrastor skärm och snygg baksida, med ett helt nytt chipset inuti. " }]};

//5. Gör om uppgiften så att varukorgen hamnar i en cookie. Vad är den stora skillnaden
//jämfört med att använda web storage?

//6. Om du hinner . Bygg en applikation som växlar pengar och visar kurser (liknande tex
//forex.se). Läs ned en json fil med aktuella kurser via ett öppet web api ( tex
//https://openexchangerates.org/) och lägg i session storage. Använd värden därifrån när
//man vill veta växlingskursen. 