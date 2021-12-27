const people = [
    {name: 'Maksim', age: 27, budget: 5000},
    {name: 'Vika', age: 16, budget: 4900},
    {name: 'Dima', age: 26, budget: 9000},
    {name: 'Stas', age: 23, budget: 1000},
    {name: 'Danila', age: 10, budget: 3500}
]

//for(let i = 0; 0 < people.length; i++){
//console.log(mas[i]);
//}


//for (let person of people ){
// console.log(person)
//}



//forEach
//people.forEach(function (person){
//    console.log(person);
//})

//people.forEach(person => console.log(person))


//map
//const newPeo = people.map(person => {
// return person.name
//})
//console.log(newPeo)


//const newPeople = people.map(person => `${person.name} (${person.age})`)
//console.log(newPeople)

//const newPeopl = people.map(person => person.age * 3)
//console.log(newPeopl)

//Filter
//const Kat = []
//for (let i = 0; i < people.length; i++){
// if (people[i].age >= 18){
//  Kat.push(people[i])
//}
//}
//console.log(Kat)


//const puk = people.filter(person => {
//if(person.age >= 18){
//   return true
//}
//})
//console.log(puk)

//const adler = people.filter(person => person.age >= 27)
//console.log(adler)

//Reduce
    //let big = 0;
    //for(let i = 0; 0 < people.length; i++){
      //  big += people[i]. budget
   // }
    //console.log(big);


//const lis = people.reduce((total, persone) => {
    //return total + persone.budget
//},0)
//console.log(lis);




//const haus = people.reduce((total, persone) => {
   // return total + persone.budget
//}, 0)
//console.log(haus);


//const haus = people.reduce((total, persone) => total + persone.budget , 0);
//console.log(haus);


//Find
//const  maksim = people.find(persone => persone.name === 'Maksim')
//console.log(maksim)


//FindIndex
//const  maksimIndex = people.findIndex(persone => persone.name === 'Maksim')
//console.log(maksimIndex)


//================
//const newPeople = people
   // .filter(person => person.budget > 4000)
   // .map(persone => {
       // return{
         //   info: `${persone.name} (${persone.age})`,
            //budget: persone.budget
       // }
//})
//console.log(newPeople);




 const infoName = people
     .filter(persone => persone.budget > 5000)
     .map(persone => {
         return{
             info: `${persone.name} (${persone.age})`,
             budget: persone. budget
         }
     })
 console.log(infoName)