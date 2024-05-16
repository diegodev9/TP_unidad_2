/*const printMessage = (msg = "no hay mensaje") => {
  return `Este es el mensaje recibido: ${msg}.`;
}

const result = printMessage("Esto es un argumento enviado a la funcion");
console.log(result);

let namesA = [
  "Juan",
  "María",
  "Pedro",
  "Ana",
  "Luis",
  "Laura",
  "Carlos",
  "Sofía"
];

let namesB = [
  "Miguel",
  "Elena",
  "Diego",
  "Lucía",
  "Javier",
  "Paula",
  "Andrés",
  "Valentina",
  "Roberto",
  "Carmen",
  "David",
  "Isabel"
]

const allNames = [...namesA, ...namesB];
console.log(allNames);*/

/*
function calculator(n,m,cb){
  return cb(n,m);
}

const sum = (n,m) => n+m;
const substract = (n,m) => n-m;
function multiply(n,m){
  return n * m;
}
const divide = (n,m) => n/m;

console.log(calculator(10,5, sum))
console.log(calculator(10, 5, multiply))*/

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "San Francisco",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Washington",
  "Boston",
  "Detroit",
  "Nashville"
];

const upperCityNames =  cities.map((city)=>city.toUpperCase());
console.table(upperCityNames);

/*const startingScities = cities.filter((city)=> city[0]==="S")*/
const startingScities = cities.filter((city)=> city.startsWith('S'))
console.table(startingScities);