//Cookies & Web storage
//1. Skapa en html sida med en knapp. När man klickar på knappen skall det visas en alert
//som talar om hur många gånger som man klickat på knappen. För varje gång man klickar
//på knappen skall detta räknas upp dvs ”Du har klickat (en, två, tre) gånger på knappen”.
//Lös detta genom att lägga ett tal i web storage som uppdateras varje gång man klickar.

var body = document.getElementsByTagName("body")[0];

let button = document.createElement("button");
let buttonText = document.createTextNode("Click Me!");
button.appendChild(buttonText);

localStorage.setItem("count", 0);

button.addEventListener("click", () => { localStorage.setItem("count", parseInt(localStorage.getItem("count")) +1); alert(localStorage.getItem("count")); } );

body.appendChild(button);

//2. Gör om uppgift 1 men lös den med en cookie istället.


let button2 = document.createElement("button");
let button2Text = document.createTextNode("Click Me!");
button2.appendChild(button2Text);

document.cookie = "count=0";

button2.addEventListener("click", () => { let count = GetCookie("count"); count++; document.cookie = "count=" + count; alert(count); } );

body.appendChild(button2);

function GetCookie(name) 
{
    match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

//3. Ta fram en lista med planeter från Star Wars api:et. Visa det som en lista på en html
//sida. Du skall nu bygga sorterings funktionalitet till denna listan. Det skall gå att sortera
//listan i bokstavsordning samt efter planeternas storlek (diameter). Json filen med
//planetdata skall ligga i session storage under tiden dvs den skall bara hämtas när
//webbstidan laddas.

var starWarsAPI = new StarWarsAPI();
starWarsAPI.Initialize();

function StarWarsAPI()
{
    this.planets = new Array();

    this.Initialize = function()
    {
        this.LoadPlanets("https://swapi.co/api/planets");
    }

    this.LoadPlanets = function(aURL)
    {

        fetch(aURL).then(
            function (response) 
            {
                if (response.status !== 200) 
                {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                response.json().then(
                    data => this.LoadPlanetsRecursive(data)
                );
            }.bind(this)
        ).catch(function (err) 
        {
            console.log('Fetch Error :-S', err);
        });
    }

    
    this.LoadPlanetsRecursive = function(aData)
    {

        for (let planet of aData.results)
        {
            let newPlanet = new Planet(planet);
            this.planets.push(newPlanet);
        }

        if (aData.next != null)
        {
            fetch(aData.next).then(
                function (response) 
                {
                    if (response.status !== 200) 
                    {
                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                        return;
                    }
    
                    response.json().then(
                        data => this.LoadPlanetsRecursive(data)
                    );
                }.bind(this)
            ).catch(function (err) 
            {
                console.log('Fetch Error :-S', err);
            });
        }
    }

    this.PresentPlanetsInHTML = function()
    {

    }
}

function Planet(aPlanet)
{
    this.name = aPlanet.name;
    //console.log(this);
}

//4. Uppgiften handlar om att bygga en enkel webshop med klientkod. Du har följande JSON
//fil. Lägg ut alla produkter på en webbsida med en köp knapp efter varje produkt. När
//man klickar på knappen skall produkten läggas i en varukorg som sparas i session
//storage. Gör en gå till kassa knapp. När man klickar på den skall innehållet i varukorgen
//visas och totalpriset på beställningen summeras.

let hr = document.createElement("hr");
body.appendChild(hr);

let webShop = new Webshop();
webShop.Initialize();

function Webshop()
{
    this.products = {"products": [{"id": "1", "name":"Samsung Galaxy S8", "price": "5999" , "description": "Samsung S8 tar klassisk Samsung tillförlitlighet till nästa nivå med ännu mera smart och innovativ teknik."},
    { "id": "2","name":"iPhone 8", "price": "6999" ,"description": "Har skärmstorleken 4,7 tum, baksida i glas och finns i färgerna silver, guld samt rymdgrå. Nytt från föregående modell är stöd för trådlös laddning, bättre prestanda" }, 
    {"id": "3", "name":"Huawei 10", "price": "6999" ,"description ": " Extrastor skärm och snygg baksida, med ett helt nytt chipset inuti. " }]};

    this.buttonBuy = null;
    this.buttonCart = null; 

    this.cart = new Array();

    this.Initialize = function()
    {
        this.buttonCart = document.createElement("button");
        let buttonCartText = document.createTextNode("Cart");
        this.buttonCart.appendChild(buttonCartText);
        this.buttonCart.addEventListener("click", () => { this.ShowCart(); });
        body.appendChild(this.buttonCart);

        let br = document.createElement("br");
        body.appendChild(br);

        for (let product of this.products.products)
        {
            let div = document.createElement("div");
            let span = document.createElement("span");
            span.innerHTML= product.name + " - " + product.price + ":-";

            div.appendChild(span);

            let buttonProduct = document.createElement("button");
            let buttonProductBuy = document.createTextNode("Buy");
            let id = product.id;
            buttonProduct.appendChild(buttonProductBuy);
            buttonProduct.addEventListener("click", () => this.AddToCart(id))

            div.appendChild(buttonProduct);

            body.appendChild(div);
        }
    }

    this.AddToCart = function(aID)
    {
        this.cart.push(this.products.products[aID-1]);
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
    }

    this.ShowCart = function()
    {
        let cart = JSON.parse(sessionStorage.getItem("cart"));

        let count = 0;
        let price = 0;

        let hr = document.createElement("hr");
        body.appendChild(hr);

        let strong = document.createElement("strong");
        strong.innerText = "Cart Items:";

        body.appendChild(strong);

        for (let product of cart)
        {
            let div = document.createElement("div");
            let span = document.createElement("div");
            span.innerHTML= product.name + " - " + product.price + ":-";
            div.appendChild(span)

            body.appendChild(div);

            count++;
            price += parseInt(product.price);
        }

        let summarySpan = document.createElement("span");
        summarySpan.innerHTML = "Items: " + count + " Price total: " + price;
        
        body.appendChild(summarySpan);

        hr = document.createElement("hr");
        body.appendChild(hr);
    }
} 

//5. Gör om uppgiften så att varukorgen hamnar i en cookie. Vad är den stora skillnaden
//jämfört med att använda web storage?

hr = document.createElement("hr");
body.appendChild(hr);

let webShop2 = new WebShopCookie();
webShop2.Initialize();


function WebShopCookie()
{
    this.products = {"products": [{"id": "1", "name":"Samsung Galaxy S8", "price": "5999" , "description": "Samsung S8 tar klassisk Samsung tillförlitlighet till nästa nivå med ännu mera smart och innovativ teknik."},
    { "id": "2","name":"iPhone 8", "price": "6999" ,"description": "Har skärmstorleken 4,7 tum, baksida i glas och finns i färgerna silver, guld samt rymdgrå. Nytt från föregående modell är stöd för trådlös laddning, bättre prestanda" }, 
    {"id": "3", "name":"Huawei 10", "price": "6999" ,"description ": " Extrastor skärm och snygg baksida, med ett helt nytt chipset inuti. " }]};

    this.buttonBuy = null;
    this.buttonCart = null; 

    this.cart = new Array();

    this.Initialize = function()
    {
        this.buttonCart = document.createElement("button");
        let buttonCartText = document.createTextNode("Cart");
        this.buttonCart.appendChild(buttonCartText);
        this.buttonCart.addEventListener("click", () => { this.ShowCart(); });
        body.appendChild(this.buttonCart);

        let br = document.createElement("br");
        body.appendChild(br);

        for (let product of this.products.products)
        {
            let div = document.createElement("div");
            let span = document.createElement("span");
            span.innerHTML= product.name + " - " + product.price + ":-";

            div.appendChild(span);

            let buttonProduct = document.createElement("button");
            let buttonProductBuy = document.createTextNode("Buy");
            let id = product.id;
            buttonProduct.appendChild(buttonProductBuy);
            buttonProduct.addEventListener("click", () => this.AddToCart(id))

            div.appendChild(buttonProduct);

            body.appendChild(div);
        }
    }

    this.AddToCart = function(aID)
    {
        //Change To Cookie
        this.cart.push(this.products.products[aID-1]);
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
    }

    this.ShowCart = function()
    {
        //Change To Cookie
        let cart = JSON.parse(sessionStorage.getItem("cart"));

        let count = 0;
        let price = 0;

        let hr = document.createElement("hr");
        body.appendChild(hr);

        let strong = document.createElement("strong");
        strong.innerText = "Cart Items:";

        body.appendChild(strong);

        for (let product of cart)
        {
            let div = document.createElement("div");
            let span = document.createElement("div");
            span.innerHTML= product.name + " - " + product.price + ":-";
            div.appendChild(span)

            body.appendChild(div);

            count++;
            price += parseInt(product.price);
        }

        let summarySpan = document.createElement("span");
        summarySpan.innerHTML = "Items: " + count + " Price total: " + price;
        
        body.appendChild(summarySpan);

        hr = document.createElement("hr");
        body.appendChild(hr);
    }
}

//6. Om du hinner . Bygg en applikation som växlar pengar och visar kurser (liknande tex
//forex.se). Läs ned en json fil med aktuella kurser via ett öppet web api ( tex
//https://openexchangerates.org/) och lägg i session storage. Använd värden därifrån när
//man vill veta växlingskursen. 

//04fd550a0e674d8f9d3479569b11e584

hr = document.createElement("hr");
body.appendChild(hr);

let buttonExchange = document.createElement("button");
let buttonExchangeText = document.createTextNode("Convert");

let selectListUSD = document.createElement("select");
let selectListUSDOption = document.createElement("option");
selectListUSDOption.text = "USD";
selectListUSDOption.disabled = true;
selectListUSDOption.selected = true;
selectListUSD.add(selectListUSDOption);

body.appendChild(selectListUSD);

let selectListTargetCurrencies = document.createElement("select");

body.appendChild(selectListTargetCurrencies);

let inputCurrencyAmount = document.createElement("input");

body.appendChild(inputCurrencyAmount);

let exchangeCurrency = new ExchangeClass();
exchangeCurrency.Initialize();

function ExchangeClass()
{
    this.curriencies = new Array();

    this.Initialize = function()
    {
        fetch('https://openexchangerates.org/api/currencies.json').then(
            function (response)
            {
                if (response.status !== 200)
                {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                response.json().then(
                    (data) => { this.CreateCurrenciesData(data); }
                );
            }.bind(this)
        ).then(
            /*fetch('https://openexchangerates.org/api/latest.json?app_id=04fd550a0e674d8f9d3479569b11e584').then(
                function (response)
                {
                    if (response.status !== 200)
                    {
                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                        return;
                    }
    
                    response.json().then(
                        (data) => { console.log(data); }
                    );
                }.bind(this) */     
            )
        


        //https://openexchangerates.org/api/latest.json?app_id=04fd550a0e674d8f9d3479569b11e584

    }

    this.ConvertTo = function()
    {
        let currencyBase = "USD";
        let currencyTarget = "SEK";
        let currencyAmount = 10;
        
        //https://openexchangerates.org/api/convert/19999.95/GBP/EUR?app_id=04fd550a0e674d8f9d3479569b11e584

        /*
        fetch('https://openexchangerates.org/api/convert/' + currencyAmount + '/' + currencyBase +'/' + currencyTarget + '?app_id=04fd550a0e674d8f9d3479569b11e584').then(

        )
        */

    }


    this.CreateCurrenciesData = function(aData)
    {
        for (let currency in aData)
        {
            if (aData.hasOwnProperty(currency)) 
            {
                this.curriencies.push(new Currency(currency, aData[currency]));
                
                let currencyOption = document.createElement("option");
                currencyOption.text = currency;

                selectListTargetCurrencies.add(currencyOption);
            }
        }
    }
}


function Currency(aAbbr, aName)
{
    this.abbrivation = aAbbr;
    this.name = aName;
    console.log(this);
}