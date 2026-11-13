/*let numbers=[10,40,20,30,60];
console.log("first element", numbers[0]);
console.log("last element", numbers[numbers.length-1]);


let marks=[30,78,45,87,60];

marks[2]=100;
console.log(marks);


let fruits = ["mango","apple","orange"];

for (let index in fruits){

console.log(index);
}


let students=["anu","riya","manu"];

for (let index in students){
console.log(index,students[index]);


let marks1=[25,35,40,50,65];

let total=0;

for(let index in marks1)
{
  total= total + marks1[index];
  
}
console.log(total);}*/


let frutis=["mango","apple","banana"];

for (let fruit of frutis){

    console.log(fruit);
}


let numbers = [10,15,17,21,26,30];

for(let even of numbers)
{

    if(even%2===0)
    {

        console.log(even);
    }

}
