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

function storevalue(number)
{
  let value=0;

  value=number;
  console.log(value);
    

};


	
    
const click1=document.querySelector(".button1");
click1.addEventListener('click',printnumber1);


   function printnumber1()
   {
       const number=document.createElement("p");
       number.textContent= ("1");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
      // let number1=number.textContent=1;
      // storevalue(number1);
       
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


   const click3=document.querySelector(".button3");
   click3.addEventListener('click',printnumber3);

   function printnumber3()
   {
       const number=document.createElement("p");
       number.textContent= ("3");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };

   const click4=document.querySelector(".button4");
   click4.addEventListener('click',printnumber4);

   function printnumber4()
   {
       const number=document.createElement("p");
       number.textContent= ("4");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };

   const click5=document.querySelector(".button5");
   click5.addEventListener('click',printnumber5);

   function printnumber5()
   {
       const number=document.createElement("p");
       number.textContent= ("5");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };

   const click6=document.querySelector(".button6");
   click6.addEventListener('click',printnumber6);

   function printnumber6()
   {
       const number=document.createElement("p");
       number.textContent= ("6");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };

   const click7=document.querySelector(".button7");
   click7.addEventListener('click',printnumber7);

   function printnumber7()
   {
       const number=document.createElement("p");
       number.textContent= ("7");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };

   const click8=document.querySelector(".button8");
   click8.addEventListener('click',printnumber8);

   function printnumber8()
   {
       const number=document.createElement("p");
       number.textContent= ("8");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };

   const click9=document.querySelector(".button9");
   click9.addEventListener('click',printnumber9);

   function printnumber9()
   {
       const number=document.createElement("p");
       number.textContent= ("9");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };

   const click0=document.querySelector(".button0");
   click0.addEventListener('click',printnumber0);

   function printnumber0()
   {
       const number=document.createElement("p");
       number.textContent= ("0");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };

   const clickMinus=document.querySelector(".button-");
   clickMinus.addEventListener('click',minus);

   function minus()
   {
       const number=document.createElement("p");
       number.textContent= ("-");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       let subtractStore=document.getElementById("screen");
       subtractStore=screen.textContent;
       console.log(subtractStore);

    
       
       
       
   };


   const clickMulti=document.querySelector(".buttonMulti");
   clickMulti.addEventListener('click',multi);

   function multi()
   {
       const number=document.createElement("p");
       number.textContent= ("*");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };


   const clickPlus=document.querySelector(".buttonPlus");
   clickPlus.addEventListener('click',add);

   function add()
   {
       const number=document.createElement("p");
       number.textContent= ("+");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };



   const clickDiv=document.querySelector(".buttonDiv");
   clickDiv.addEventListener('click',divide);

   function divide()
   {
       const number=document.createElement("p");
       number.textContent= ("/");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };

   const clickEqual=document.querySelector(".buttonEqual");
   clickEqual.addEventListener('click',equal);

   function equal()
   {

    
       //const number=document.createElement("p");
       //number.textContent= ("=");
       //const screen=document.getElementById("screen");
       //screen.appendChild(number);
       
       
       
   };

   const clickPer=document.querySelector(".buttonPer");
   clickPer.addEventListener('click',period);

   function period()
   {
       const number=document.createElement("p");
       number.textContent= (".");
       const screen=document.getElementById("screen");
       screen.appendChild(number);
       
       
       
   };

   
   

});

