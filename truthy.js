//false,0,-0,big0,"",null,undefined,nan--falsy values
//true,1,-1,"hello",zero,"false"," ",{},[],function(){}--truthy values

let value =0; //falsy

if(value)
{
    console.log("truthy value");
}
else
  {
    console.log("falsy value");
}  


let name="";

if(name){

   console.log("name is available") ;
}
else
{
console.log("name is empty") ;
}

let fruits =[];
if(fruits)
{
console.log("name is truthy") ;
}
else
{
console.log("name is falsy") ;
}

let fruits1 ={};
if(fruits1)
{
console.log("fruits1 is truthy") ;
}
else
{
console.log("fruits1 is falsy") ;
}

let a=null;

let b;

if(a)
{
console.log("a is truthy") ;
}
else
{
console.log("a is falsy") ;
}

if(b)
{
console.log("b is truthy") ;
}
else
{
console.log("b is falsy") ;
}

console.log(Boolean(10));
console.log(Boolean(0));
console.log(Boolean(null));



let username ="";
if(username)
{
    console.log("loggin successfull");
}
else
{
 console.log("loggin unsuccessfull");
}