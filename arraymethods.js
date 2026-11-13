//for each,map,filter

let students=["manu","sanu","anu"];
students.forEach (function (name){
console.log(name);
});


let numbers=[2,4,6,8,10];
let result= numbers.map(function(num){
return num*2;

})
console.log(result);


let names=["neenu","anu","reenu"];

let girls=names.map(function(name)
{
   return name.toUpperCase();
})
console.log(girls);

//filter method

let numbers1=[10,15,20,40,60,80];

let digit =numbers1.filter(function(num){

   return num>15;

})
console.log(digit);


let numbers2 = [5,20,35,45,55];

let digits= numbers2.filter(function(digit){

   return digit%2===0;
})
console.log(digits);
