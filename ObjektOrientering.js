//Objektorientering
//1. Skapa en ny klass. Döp den till Student. Den skall ha egenskaperna förnamn, efternamn,
//email och telefonnummer. Skapa properties för alla dessa egenskaper. Skapa sedan kod
//där alla värden sätts på klassen. Hämta sedan alla värden från klassen och skriv ut. Pröva
//sedan att göra samma lösning fast sätt alla värden via konstruktorn istället.


function Student(aFnamn, aEnamn, aEmail, aTelefonnummer)
{
    this.fNamn = aFnamn;
    this.eNamn = aEnamn;;
    this.email = aEmail;
    this.tel = aTelefonnummer;

    this.SetFornamn = function(aFnamn)
    {
        this.fNamn = aFnamn;
    }
    this.GetFornamn = function()
    {
        return this.fNamn;
    }    
    this.SetEfternamn = function(aEnamn)
    {
        this.eNamn = aEnamn;
    }
    this.GetEfternamn = function()
    {
        return this.eNamn;
    }    
    this.SetEmail = function(aEmail)
    {
        this.email = aEmail;
    }
    this.GetEmail = function()
    {
        return this.email;
    }    
    this.SetTelefonnummer = function(aTelefonnummer)
    {
        this.tel = aTelefonnummer;
    }
    this.GetTelefonnummer = function()
    {
        return this.tel;
    }
}

var student1 = new Student();
student1.SetFornamn("Sven");
student1.SetEfternamn("Andersson");
student1.SetEmail("sven.andersson@email.com");
student1.SetTelefonnummer("123456789");

console.log(student1.GetFornamn() + " " + student1.GetEfternamn() + " " + student1.GetEmail() + " " + student1.GetTelefonnummer());

var student2 = new Student("Anders", "Svensson", "ander.svensson@email.com", "987654321");

console.log(student2.GetFornamn() + " " + student2.GetEfternamn() + " " + student2.GetEmail() + " " + student2.GetTelefonnummer());

//2. Skapa en klass som heter Fordon. Ett fordon har en vikt, antal mil, bränsleförbrukning
//(per mil), ett regnummer och en färg. Skapa en metod i fordon som beräknar fordonets
//totala bränsleförbruktning. Den är i grunden antal mil * bränsleförbrukning.

function Fordon(aVikt, aAntalMil, aBransleForbrukning, aRegNummer, aFarg)
{
    this.vikt = aVikt;
    this.antalMil = aAntalMil;
    this.bransleforbrukningPerMil = aBransleForbrukning;
    this.regNummer = aRegNummer;
    this.farg = aFarg;

    this.TotalBransleForbrukning = function()
    {
        return this.antalMil * this.bransleforbrukningPerMil;
    }
}


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

function Personbil(aVikt, aAntalMil, aBransleForbrukning, aRegNummer, aFarg, aLastKapacitet, aLast)
{
    Fordon.call(this, aVikt, aAntalMil, aBransleForbrukning, aRegNummer, aFarg);
    this.lastKapacitet = aLastKapacitet;
    this.last = aLast;

    this.TotalBransleForbrukning = function()
    {
        if (this.last > 0)
        {
            return this.antalMil * (this.bransleforbrukningPerMil + 0.1);
        }
        return this.antalMil * this.bransleforbrukningPerMil;
    }
}

function Lastbil(aVikt, aAntalMil, aBransleForbrukning, aRegNummer, aFarg, aHarSlap, aSlapKapacitet)
{
    Fordon.call(this, aVikt, aAntalMil, aBransleForbrukning, aRegNummer, aFarg);
    this.slap = aHarSlap;
    this.slapVikt = aSlapKapacitet;

    this.TotalBransleForbrukning = function()
    { 
        if (this.slapVikt > 0)
        {
            return this.antalMil * (this.bransleforbrukningPerMil + 0.2);
        }

        return this.antalMil * this.bransleforbrukningPerMil;
    }
}

function Motorcykel(aVikt, aAntalMil, aBransleForbrukning, aRegNummer, aFarg)
{
    Fordon.call(this, aVikt, aAntalMil, aBransleForbrukning, aRegNummer, aFarg);
}

let personbil1 = new Personbil(2500, 200, 0.8, "ABC123", "Röd", 500, 500);
let lastbil1 = new Lastbil(4000, 200, 1.4, "DEF456", "Vit", true, 1000);
let motorcykel1 = new Motorcykel(1500, 200, 0.8, "GHI789", "Svart");

console.log(personbil1.TotalBransleForbrukning());
console.log(lastbil1.TotalBransleForbrukning());
console.log(motorcykel1.TotalBransleForbrukning());

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

let swAPI = new StarWarsAPI();
swAPI.GetPersons();

function StarWarsAPI()
{
    this.persons = new Array();

    this.GetPersons = function()
    {
        fetch('https://swapi.co/api/people').then(function () 
        {
            if (someCondition) 
            {
                resultFound = true;
            }
            else 
            {
                GetPersons();
            }
        });
    }
}

function Person()
{
    this.name;
    this.height;
    this.mass;
}