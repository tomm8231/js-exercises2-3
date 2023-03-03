       //Observe: no return type, no type on parameters
      
function add(n1, n2){
   return n1 +n2;
}

      const sub = function(n1,n2){
  return n1 - n2
} 

const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};





//Opg 4
function mul(n1, n2) {
    return n1 * n2;
}

console.log(cb(1,2,mul))

//Anonym function opg 5
console.log(cb(1,2,((n1,n2) => n1/n2)))





let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]


let names2 = names.filter(name => name.length <= 3)
names.forEach(name => console.log(name))
console.log("Names with less three letters and below:")
names2.forEach(name => console.log(name))


let names3 = names.map(name => name.toUpperCase())
names3.forEach(name => console.log(name))


function createNameList(names) {
let names4 = names.map(name => `\n  <li>${name}</li>`).join('');
return `<ul>${names4}\n</ul>`;
}

let nameList = createNameList(names)

console.log(nameList)




//opg 4

const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let cars2 = cars.filter(car => car.year>1999)
console.log(cars2)



let cars3 = cars.filter(car => car.make=="Volvo")
console.log(cars3)


let cars4 = cars.filter(car => car.price<5000)
console.log(cars4)



function createSqlStatement(values) {
  let cars6 = cars.map(car => `INSERT INTO cars (id,year,make,model,price) VALUES (${car.id}, ${car.year}, ${car.make}, ${car.model}, ${car.price});\n`).join("");
  return `${cars6}`;
  }
  
  let sql = createSqlStatement(cars)

  console.log(sql)


  let array = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
  
  console.log(array)

// const array2 = myFilter(array, callback)

  //console.log(array2)

  /*
  const newCars1999 = (car) => car.year > 1999;
  console.log(newCars1999)
  */
/*
  function myFilter(array, callback) {
  const filteredArray = []
  array.array.forEach(element => {
    if (callback(element)) {
      filteredArray.push(element)
    }
  })
  return filteredArray
  }
  */
  




