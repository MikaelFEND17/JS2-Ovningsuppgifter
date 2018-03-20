var input = {
  fornamn: "Lisa",
  efternamn: "Lind",
  adress: {
    gata: "Storgatan 3",
    postort: "Södertälje",
    postnr: "11122"
  },
  kurser: ["Javascript1", "Javascript2", "Webbdesign"]
};

//1. Du har följande json sträng. Ta emot strängen i en variabel och skriv sedan ut förnamn och efternamn med console.log
console.log(input.fornamn + " " + input.efternamn)

//2. Ta sedan fram alla kurser ur strängen och skriv ut med console.log
console.log(JSON.stringify(input.kurser));

//3. Ta ut alla adress uppgifter och skriv ut med console.log
console.log("Gata: " + input.adress.gata + " Postort: " + input.adress.postort + " Postnummer: " + input.adress.postnr);

//4. Koppla nu det du gjort i uppgift 1-3 till en webbsida. Du skall skapa element på sidan där du
//   lägger värdena från json-filen. Tänk dig att du öppnar learnpoint och visar en översiktssida över
//   en student. Lägg alla kurser i en lista. Välj vilken typ av element du visar de andra värdena med.

var divWrapper = document.getElementById("wrapper");

var studentName = document.createElement("p");
var studentNameText = document.createTextNode(input.fornamn + " " + input.efternamn);
studentName.appendChild(studentNameText);

divWrapper.appendChild(studentName);


var studentAdress = document.createElement("p");
var studentAdressText = document.createTextNode("Gata: " + input.adress.gata + " Postort: " + input.adress.postort + " Postnummer: " + input.adress.postnr);
studentAdress.appendChild(studentAdressText);

divWrapper.appendChild(studentAdress);

var kurser = document.createElement("ul");

for (kurs of input.kurser)
{
    console.log(kurs);
    let liKurs = document.createElement("li");
    let liKursText = document.createTextNode(kurs);
    liKurs.appendChild(liKursText);
    kurser.appendChild(liKurs);
}

divWrapper.appendChild(kurser);


//5. Skapa en klass som du kallar för produkt . Den skall ha egenskaperna namn, pris och beskrivning.
//   Skapa upp en instans av klassen och sätt alla värden. Gör sedan om det till en json sträng och
//   skriv ut texten i json format via console.log.

function Product(aName, aPrice, aDescription)
{
    this.name = aName;
    this.price = aPrice;
    this.description = aDescription
}

let product1 = new Product("Test", 199.99, "Test Product");

console.log(JSON.stringify(product1));

//6. Ta emot följande json-sträng och skriv ut en klasslista på en webbsida med en rubrik med
//   klassens namn och en lista med alla studenter
var klass = {
  className: "FEND17",
  students: [
    { name: "Lisa Lind", email: "Lisalind@gmail.com" },
    { name: "Kalle Karlsson", email: "kalleK@gmail.com" },
    { name: "Anna Persson", email: "annaP@gmail.com" }
  ]
};

console.log(klass.className);

for (student of klass.students)
{
    console.log(student.name + " " + student.email);
}

//7. Bygg ihop flera saker så det blir en applikation där man först kan söka och sedan klicka
//vidare för att se detaljer om filmer, personer och sedan det som finns kopplat till dessa

//8. Hitta ett annat API som du kan testa att använda tex Slacks API
//https://any-api.com/slack_com/slack_com/docs/API_Description
//http://apikatalogen.se/
//https://jsonplaceholder.typicode.com/