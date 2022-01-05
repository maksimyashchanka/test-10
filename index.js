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




 // const infoName = people
 //     .filter(persone => persone.budget > 5000)
 //     .map(persone => {
 //         return{
 //             info: `${persone.name} (${persone.age})`,
 //             budget: persone.budget
 //         }
 //     })
 // console.log(infoName)


 // const infoZir = people
 //     .filter(persone => persone.budget > 5000)
 //     .map(persone => {
 //         return{
 //             info: `${persone.name} (${persone.age})`,
 //             budget: persone.budget
 //         }
 //     })
     //.reduce((total, persone) => total + persone.budget, 0 )
     // console.log(infoZir);

//Диструктуризация Массив
function calcValue (a, b) {
    return[
        a + b,
        undefined,
        a * b,
        a / b

    ]
}
// const [sum, sub = "Нет вычисления", priv, ...pi] = calcValue(40 , 10);
// console.log(sum, priv, pi, sub);


//Диструктуризация Обьект
const person = {
    name: "Max",
    age: 20,
    address: {
        country: "Lolcin",
        city: "Minsk"
    }
}
  // const {name, age, car = "Авто нет в наличии", address} = person;
  // console.log(name, age, car,  address);

 // const {name, ...info} = person;
 //  console.log(name, info);

 // function newPerson({name, age}) {
 //     console.log (name + " " + age)
 // }


//Функция
function test(){
    const n = 15;
    const m = 25;
    console.log(n + m)
}
test();


function indexTime(){
    let time = Math.floor(new Date().getTime())
    console.log(time)
}
indexTime();

function rondomindex(){
    const min = 0;
    const max = 100;
    let result = Math.floor(min + Math.random() * (max + 1 - min))
    console.log(result)
}
rondomindex();

//Аргументы
function sum3(x1, y1){
    console.log(x1 + y1);
}
sum3(44, 11);
let z = 77;
sum3(z, 10);
sum3(z, z * 2);

//Однин вариант записи
function show(elem, x, y){
    document.querySelector(elem).textContent = x + y;
}
show('.out-2', 5,6);

//Второй вариант записи
function show2(elem, x, y) {
    elem.textContent = x + y;
}
const out1 = document.querySelector('.out-1');
show2(out1, 70, 30);


//Третий вариант записи
function show3(x, y, elem= '.out-1'){
    document.querySelector(elem).textContent = x + y;
}
show3(10,15, );


//Четвёртый вид записи
function show4(elem= '.out-1', x, y){
    console.log(arguments);
    document.querySelector(elem).textContent = x + y;
}
show4('.out-2', 10,20);


function red() {
    console.log(arguments);
    let about = 0;
    for(let i = 0; i < arguments.length; i++){
        about += arguments[i];
    }
    console.log(about);
}
red(4, 6, 10);


function red2(...args) {
    console.log(args);
    let about2 = args.reduce((accum, item) => accum += item);
    console.log(about2);
}
red2(4, 6, 10, 20, 30, 4, 5);


//Функция как аргумент
function blic(resul){
    document.querySelector('.out-1').innerHTML = `<mark>${resul}</mark>`;

}

function me ( num, drawFunction){
    drawFunction(num)
}
me(  450, blic );




function bli(res){
    document.querySelector('.out-2').innerHTML = `<b>${res}</b>`;

}
function mi (drawFunction,...num){
    drawFunction(num)
}
mi( bli, 450, 500, 600, 100);


//Return
function f1(x, y){
    return x + y;
}

function f2(){
    console.log(2);
    return 15;
}
f2();
console.log(1 + f2());
console.log(f1(3,3) + f1(3, 3));
console.log(2 + 3 + 4 + 5 + f1(1 , 1));

function last (min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand)
}
let r = last(1, 5);
console.log(r);
console.log(last(6, 10) + 100);

//Способы вывода функции.
console.log(f1(100, 201));
document.querySelector(`.out-1`).textContent = (f1(400, 300)); //Браузер
document.querySelector(`.out-1`).style .background = `rgb(25, 123, 19)`; //Браузер
document.querySelector(`.out-2`).style .background = `rgb(120, 10, 11)`; //Браузер
document.querySelector(`.out-2`).style .background =
    `rgb(${last (0, 255)}, ${last (0, 255)}, ${last (0, 255)})`; //Браузер
//lert(f1(4,4));

//Использовать в выражениях
console.log(100 * f1(3, 4));





//Вывод данных введенных пользователем css html js(общий файл)
document.querySelector(`.b-3`).addEventListener(`click`,
    function  (){
    const s = document.querySelector(`.i-3`).value;
        document.querySelector(`.out-3`).innerHTML = 'Привет ' + clearText(s);
        console.log('Привет ' + clearText(s));
    });

function clearText(data){
    return data.trim().toUpperCase();
}


document.querySelector(`.b-3`).addEventListener(`click`, //Кнопка
    function  (){
        document.querySelector(`.b-3`).style .background = `rgb(120, 10,10)`;
    })



function f4(){
    console.log(1)
    return;
    console.log(2)
    console.log(3)
}
f4()

//Прерывание функции
//indexOf
function indexOfMuil(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num) return i;
    }
    return -1;
}
let resu = indexOfMuil([120, 23,122,1, 2, 12,22, 33, 44, 55], 55);
console.log(resu);



//Пользователь вводит количество лет
document.querySelector(`.b-4`).addEventListener(`click`, //Кнопка
    function  (){
    let year = document.querySelector(`.i-4`).value;
    if(isNaN(year)) return;
    if(year <= 0 || year > 140) return;;
    document.querySelector(`.out-4`).innerHTML =  2022 - year;
    });


// ex 5 Сумма 33
console.group('example 5');
const arr5 = [[3,4,5] , [6,7,8]];
function t5(){
    let s = 0;
    for (let i = 0; i < arr5.length; i++){
        s += sum(arr5[i])
    }
    console.log(s);
}

function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
t5();
console.groupEnd();