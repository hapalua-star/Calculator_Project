document.addEventListener('DOMContentLoaded', function() {


function add(a,b) {
	return a+b;
};

function subtract(a,b) {
	return a-b;
};


function multiply(a,b){

    return a*b;
};


function divide(a,b){

    return a/b;  
};
	


  
function power(a,b) {

  return Math.pow(a,b);
	
};


function operate(operator,a,b)
{
   if (operator== "+")
   {
    return add(a,b);
   };

   if(operator== "-")
   {
    return subtract(a,b);
   };

   if(operator=="*")
   {
    return multiply(a,b);
   };

   if(operator=="/")
   {
    return divide(a,b);
   };


}


	
       


        

            

const click1=document.querySelector(".button");
click1.addEventListener('click',printnumber);



           function printnumber()
           {
              const number=document.createElement("p");
              number.textContent= ("1");
              const screen=document.getElementById("screen");
              screen.appendChild(number);
           };








            
           
});

