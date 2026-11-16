//array add new value end
let fruits =["mango","orange","greeps","banana"];
fruits.push("apple");
console.log(fruits);

//remove last element in an array
let fruits1 =["mango","orange","greeps","banana"];
fruits1.pop();
console.log(fruits1);

//add new element in the begining
let fruits2 =["mango","orange","greeps","banana"];
fruits2.unshift("kiwi");
console.log(fruits2);

//add new element in the begining
let fruits3 =["mango","orange","greeps","banana"];
fruits3.shift();
console.log(fruits3);

//remove elements from inbetween
let fruits4 =["mango","orange","greeps","banana"];
fruits4.splice(1,2);
console.log(fruits4);

//

let fruits5 =["mango","orange","greeps","banana"];
let result = fruits4.slice(1,3);
console.log(result);
console.log(fruits5);

let fruits6 =["mango","orange","greeps","banana"];
console.log(fruits6.indexOf("orange"));
console.log(fruits6.indexOf("kiwi"));

let number =[10,40,,4,5,6];
console.log(number.lastIndexOf(5));


let fruits9 =["mango","orange","greeps","banana"];
console.log(fruits9.includes("orange"));
console.log(fruits9.includes("ban"));

let numbers =[10,40,,4,5,6];
numbers.sort((a,b)=>(a-b));
console.log(numbers);

let numbers1 =[10,40,,4,5,6];
numbers1.sort((a,b)=>(b-a));
console.log(numbers1);


let fruits10=["mango","orange","greeps","banana"];
console.log(fruits10.reverse());
