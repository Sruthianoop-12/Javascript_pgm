function greet(name,callback){
    console.log(name);
    callback();
}
function message(){
    console.log("Welcome to JS");
}
greet("anagha",message);
