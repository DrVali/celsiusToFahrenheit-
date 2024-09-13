
function celsiusToFahrenheit(){
   const celsiusTemperature  =document.getElementById("temperature").value;

   let Fahrenheit ;

  if(!isNaN(celsiusTemperature) ){
           Fahrenheit = (1.8 * celsiusTemperature ) + 32;
          alert(  "The teprature in Farenheit is "  + Fahrenheit);


  }
  else{
         alert( "please insert number in both of text box.");
  }

}

     /*    راه دوم      */
  /*
let celsiusTemperature =10;
    let Fahrenheit1 ;

 function celsiusToFahrenheit(celsiusTemperature){
     Fahrenheit1 = (1.8 * celsiusTemperature ) + 32;
          alert(  "The teprature in Farenheit is "  + Fahrenheit1);
 }

 celsiusToFahrenheit(celsiusTemperature);

                     */
