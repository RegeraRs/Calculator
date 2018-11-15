var firNumbers = 0;
var operators;
var elementBackColor;
var x = 0;

function disable() {
  document.onkeydown = function(e) {
    return false;
  }
}
disable();

function operations( firstNumb, operator, element ) {
  x++;
  firNumbers = +firstNumb;
  operators = operator;
  elementBackColor = element;
  document.getElementById( "numb" ).value = null;
  element.style.backgroundColor = "#c6c6c6";
};

function number( x ) {
  document.getElementById( "numb" ).value += x;
};

function reset( s ) {
  let y = s.substring( 0, s.length - 1 );
  document.getElementById( "numb" ).value = y;
};

function result( x ) {
  let secNumbers = +x;
  let resultat;
 switch (operators) {
   case "+":
    resultat = firNumbers + secNumbers;
     break;
   case "-":
    resultat = firNumbers - secNumbers;
     break;
   case "*":
    resultat = firNumbers * secNumbers;
     break;
   case "/":
    resultat = firNumbers / secNumbers;
     break;
   default:
 }
  document.getElementById( "numb" ).value = resultat;
  elementBackColor.style.backgroundColor = "#f2f2f2";
};
