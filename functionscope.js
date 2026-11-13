//scope: variable where all can call
//global scope,function scope,block scope

//global declare outside and inside function 
/*let namee ="sruthi";

function displayname()
{

    console.log("namee",namee);

}

displayname();

    console.log(namee);*/

    //function scope only  access inside function

   /* function showdetails()
    {
let namee ="sruthi";
let age =33;
console.log(namee);
console.log(age);
    }
    showdetails();*/

    //block scope -only access inside the block

    if(true)
    {

        let namee="sruthi";
        let age=33;
        let city="kochi";
        console.log(namee);
        console.log(age);
        console.log(city);
    }
    





