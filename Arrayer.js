//1

var bilar = [ "Volvo", "BMW", "Audi", "Skoda",
"Toyota", "Ford", "Mercedes","Seat", "Honda",
"Volkswagen","Opel", "Mazda","Suzuki" ]; 

//a. Ta fram alla bilar som har mer än 5 tecken i namnet.
const bilarLength = bilar.filter(bilar => bilar.length > 5);

console.log(bilarLength);


//b. Ta fram alla bilar vars namn börjar på ”V”.
const vBilar = bilar.filter(function(bil) { return bil.substr(0, 1) === "V";}); 

console.log(vBilar);

function filter(array, index, letter) {
    var filteredValues = array.filter(function(element) {
       return element.charAt(index) === letter;
    });
    return filteredValues;
}

console.log(filter(bilar, 0, "V"));

//c. Ta fram alla bilar vars namn innehåller bokstäverna ”da”.

const daBilar = bilar.filter(function (item) { return item.indexOf("da") >= 0; });

console.log(daBilar)

function arrContainsSubString(array, substr)
{ 
    var filteredValues = array.filter(function(element) {
        return element.indexOf(substr) >= 0;
    });
    return filteredValues;
}

console.log(arrContainsSubString(bilar, "da"));


//d. Ta fram alla bilar som börjar på ”M” eller som slutar på ”i” 

const miBilar = bilar.filter(function(bil) { return bil.substr(0, 1) === "M" || bil.substr(bil.length-1) === "i";});

console.log(miBilar);

//2

var bands = [ "ACDC", "Queen", "Aerosmith", "Iron Maiden", "Megadeth",
"Metallica", "Pearl Jam", "Oasis", "Kiss", "Blur", "Eurythmics", "Genesis",
"INXS", "Midnight Oil", "Kent", "Madness", "Manic Street Preachers", "The Offspring", "Pink Floyd", "Rammstein", "Red Hot Chili Peppers", "Deep Purple",
"U2"]; 

//a. Ta fram det band som har längst bandnamn
var longest = bands.sort(function (a, b) { return b.length - a.length; })[0];
console.log(longest);

var longest = bands.reduce(function (a, b) { return a.length > b.length ? a : b; });
console.log(longest);

//b. Ta fram en siffra på hur många band som börjar på bokstaven ”M”
var numOfMBands = bands.filter(function(item) { return item[0] === "M"; }).length

console.log(numOfMBands);

//c. Ta ut en lista på alla band sorterad i bokstavsordning. Visa bara band som har ett bandnamn som är längre än 10 bokstäver
//const sortedBands = bands.sort();
const bandsSorttedLongerThanTen = bands.filter(bands => bands.length > 10).sort();

console.log(bandsSorttedLongerThanTen);

//d. Skapa en lista som sorteras på längden på banden namn. Det band med längst namn skall hamna först i listan och det med kortast namn skall hamna sist. 

const sortByLongestName = bands.sort(function(a, b) { return b.length - a.length });

console.log(sortByLongestName);

//3 

var integers = [ 54, 23, 76, 123, 93, 7, 3489, 88 ]; 

//a. Ta fram medelvärdet av alla tal.

const medel = integers.reduce(function(total, value, index, array) { total += value; if (index === array.length-1) { return total/array.length; } else { return total; } });
console.log(medel);

//b. Ta fram det största av alla tal.

const biggest = integers.sort(function (a, b) { return b - a; })[0];
console.log(biggest);

//c. Beräkna summan av alla tal.

const sum = integers.reduce((total, value) => total + value);
console.log(sum);

//d. Ta fram summan av alla tal större än 70

const sum70plus = integers.reduce(function(total, value) { if (value > 70) { return total + value; } else { return total; } });
console.log(sum70plus);

//e. Ta fram alla jämna tal .
const even = integers.filter(function(num) { if (num % 2 === 0) { return num; }});

console.log(even);

//f. Skapa en ny array från denna array där alla värden ökats med 2 dvs nya listan blir 56,25,78,125 osv. 

integers = [ 54, 23, 76, 123, 93, 7, 3489, 88 ]; 
const newIntegers = integers.map(integer => integer + 2);
console.log(newIntegers);


var countries = [
  {
    name: "United Kingdom",
    continent: "Europe",
    population: 65270121,
    pFemale: 0.508
  },
  {
    name: "Republic of Ireland",
    continent: "Europe",
    population: 4708209,
    pFemale: 0.499
  },
  {
    name: "Australia",
    continent: "Oceania",
    population: 24482205,
    pFemale: 0.502
  },
  {
    name: "Taiwan",
    continent: "Asia",
    population: 23522296,
    pFemale: 0.501
  },
  {
    name: "Uruguay",
    continent: "South America",
    population: 3446772,
    pFemale: 0.517
  },
  {
    name: "Morocco",
    continent: "Africa",
    population: 35010005,
    pFemale: 0.51
  },
  {
    name: "Nigeria",
    continent: "Africa",
    population: 188688090,
    pFemale: 0.494
  },
  {
    name: "Zimbabwe",
    continent: "Africa",
    population: 16051510,
    pFemale: 0.507
  },
  {
    name: "China",
    continent: "Asia",
    population: 1381321335,
    pFemale: 0.488
  },
  {
    name: "Mexico",
    continent: "North America",
    population: 129386794,
    pFemale: 0.507
  },
  {
    name: "Canada",
    continent: "North America",
    population: 36446796,
    pFemale: 0.504
  },
  {
    name: "Czech Republic",
    continent: "Europe",
    population: 10556351,
    pFemale: 0.509
  },
  {
    name: "Iceland",
    continent: "Europe",
    population: 332631,
    pFemale: 0.496
  }
]; 

//a. Skriv ut namnen på alla länder i arrayen.

const countryNames = countries.map(country => country.name);
console.log(countryNames);

//b. Hur många bor i hela (arrayen) världen?

const totalPopulation = countries.reduce((total, value) => total + value.population, 0);
console.log(totalPopulation);

//c. Hur många bor i Europa?

const europePopulation = countries.reduce(function(total, value) { if (value.continent === "Europe") { return total + value.population; } else { return total; } } , 0);
console.log(europePopulation);

//d. Vilket land har minst befolkning i världen?

//const smallestPopulation = countries.reduce(function(smallest, value) { if (value.population < smallest.population || smallest == null) { smallest = value; return smallest; } }, smallest = null); 

const smallestPopulation = countries.sort(function (a, b) {return (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0);})[0].name;
console.log(smallestPopulation);


const leastPopu2 = countries.reduce(function(previousVal, value)
        { 
          if (previousVal.population < value.population) { return previousVal; }
          else { return value; } 
        })

console.log(leastPopu2.name);


//e. Vad är medelbefolkningen för länder i Afrika?

const averageAfrica = countries.reduce(function (value, country) {
  if (country.continent === "Europe") 
  {
    value.sum += country.population;
    value.avg = value.sum / ++value.count;
  }
  return value;
}, { sum: 0, count: 0, avg: 0 }).avg;
console.log(averageAfrica);

//f. Finns det något land som har mer än 50 000 000 invånare?

const countryAboveFiftyMillion = countries.reduce(function (value, country) {
  if (country.population >= 50000000) 
  {
    value.country.push({name: country.name, population: country.population});
    value.count++;
  }
  return value;
}, { count: 0, country: [] });
console.log(countryAboveFiftyMillion)

//g. Vilka länder har mellan 8 och 15 miljoner invånare?

const countriesBetweenEightAndFifteen = countries.reduce(function (value, country) {
  if (country.population >= 8000000 && country.population <= 15000000) 
  {
    value.country.push({name: country.name, population: country.population});
    value.count++;
  }
  return value;
}, { count: 0, country: [] });;
console.log(countriesBetweenEightAndFifteen);