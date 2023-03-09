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


	
    
const click1=document.querySelector(".button1");
click1.addEventListener('click',printnumber1);



 function printnumber1()
   {
       const number=document.createElement("p");
       number.textContent= ("1");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
   };

  
   const click2=document.querySelector(".button2");
   click2.addEventListener('click',printnumber2);

   function printnumber2()
   {
       const number=document.createElement("p");
       number.textContent= ("2");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };


   function switcher()
   {
    let screen=document.getElementById("screen");
    let reverseScreen= screen.textContent.split("").reverse().join("");
    
    let reversedTextNode=document.createTextNode(reverseScreen);
    screen.textContent="";
    screen.appendChild(reversedTextNode);

   }

   
   





    



           
});

