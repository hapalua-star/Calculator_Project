document.addEventListener('DOMContentLoaded', function() {


function add(a,b) {
	return (parseFloat(a)+parseFloat(b)).toFixed(0);
};

function subtract(a,b) {
	return (a-b).toFixed(0);
};


function multiply(a,b){

    return (a*b).toFixed(0);
};


function divide(a,b){

    return (a/b).toFixed(0);  
};
	


  



function operation(a,operator,b)
{
   if (operator== "+")
   {
    return add(a,b);
   }

   else if(operator== "-")
   {
    return subtract(a,b);
   }

   else if(operator=="*")
   {
    return multiply(a,b);
   }

   else if(operator=="/")
   {
    return divide(a,b);
   };


}


const clearButton=document.querySelector(".clearbutton");
clearButton.addEventListener('click',clear);

    function clear()
    {
      const screen = document.getElementById("screen");
      screen.textContent="";



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

     let a=0;
     let b=0;
     const screens=document.getElementById("screen");
     let expression=screens.textContent;
     [a,b]=expression.split(/[+\-*/]/);
       
       if (a !== undefined && b !== undefined)
       {
        equal();
        screen.appendChild(number);
       }


       else {

       screen.appendChild(number);
       };
   };


   const clickMulti=document.querySelector(".buttonMulti");
   clickMulti.addEventListener('click',multi);

   function multi()
   {
       const number=document.createElement("p");
       number.textContent= ("*");
       const screen=document.getElementById("screen");




       let a=0;
       let b=0;
       const screens=document.getElementById("screen");
       let expression=screens.textContent;
       [a,b]=expression.split(/[+\-*/]/);
         
         if (a !== undefined && b !== undefined)
         {
          equal();
          screen.appendChild(number);
         }
  
  
         else {
  
         screen.appendChild(number);
         };
       
       
       
   };


   const clickPlus=document.querySelector(".buttonPlus");
   clickPlus.addEventListener('click',addition);

   function addition()
   {
       const number=document.createElement("p");
       number.textContent= ("+");
       const screen=document.getElementById("screen");


     let a=0;
     let b=0;
     const screens=document.getElementById("screen");
     let expression=screens.textContent;
     [a,b]=expression.split(/[+\-*/]/);
       
       if (a !== undefined && b !== undefined)
       {
        equal();
        screen.appendChild(number);
       }


       else {

       screen.appendChild(number);
       };
     
       
   };



   const clickDiv=document.querySelector(".buttonDiv");
   clickDiv.addEventListener('click',division);

   function division()
   {
       
       
       
       
       const number=document.createElement("p");
       number.textContent= ("/");
       const screen=document.getElementById("screen");

       let a=0;
       let b=0;
       const screens=document.getElementById("screen");
       let expression=screens.textContent;
       [a,b]=expression.split(/[+\-*/]/);
       
       if(a!==undefined && (b)==0)
       {
        screen.textContent="";
        screen.textContent=("Cannot divide by zero");


       }
       
       
       
       
       else if (a !== undefined && b !== undefined)
       {
        equal();
        screen.appendChild(number);
       }


       else {

       screen.appendChild(number);
       };

       
       
       
   };
  

   

   const clickEqual=document.querySelector(".buttonEqual");
   clickEqual.addEventListener('click',equal);

   function equal()
   {
      
     let a=0;
     let b=0;
     const screen=document.getElementById("screen");
     let expression=screen.textContent;

       
     [a,b]=expression.split(/[+\-*/]/);

     if(a == undefined || b == undefined)
     {
        screen.textContent="REDO";


     }

     else if(b==0)

     
     {
      screen.textContent="";
      screen.textContent=("Cannot divide by zero");


     }
     

     else
     {
     let operaTor=expression.match(/([+\-*/])/)[0].trim();
    

     let c=0;
     c = operation(a,operaTor,b);

     screen.textContent="";

     const result=document.createElement("p");
     result.textContent=c;

     screen.appendChild(result);

     //console.log(operation(a,operaTor,b));
    }
     
   }

       //const number=document.createElement("p");
       //number.textContent= ("=");
       //const screen=document.getElementById("screen");
       //screen.appendChild(number);
       
       
       
   

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

