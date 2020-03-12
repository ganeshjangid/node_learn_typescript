const Greeting=(function (){
    function Greeting() {
    }
    Greeting.prototype.greet=function(){
        console.log("Hello World");
    }
    return Greeting;
})();

const obj=new Greeting();

obj.greet();



// An