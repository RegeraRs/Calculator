var click = 0;

function disable() {
  document.onkeydown = function(e) {
    return false;
  }
}

disable();

var firstNumbers = 0;
var operators;
var elemBackColor;

function operations(firstNumb, operator, element) {
  click++;
  firstNumbers = +firstNumb;
  operators = operator;
  elemBackColor = element;
  document.getElementById('numb').value = null;
  element.style.backgroundColor = "#c6c6c6";
};

function number( x ) {
  document.getElementById('numb').value += x;
};

function reset( s ) {
  const y = s.substring( 0, s.length - 1 );
  document.getElementById('numb').value = y;
};

function result( x ) {
  let secNumbers = +x;
  let finalResult;
  switch (operators) {
    case "+":
      finalResult = firstNumbers + secNumbers;
      break;
   case "-":
      finalResult = firstNumbers - secNumbers;
      break;
   case "*":
      finalResult = firstNumbers * secNumbers;
      break;
   case "/":
    finalResult = firstNumbers / secNumbers;
     break;
 }
  document.getElementById('numb').value = finalResult;
  elemBackColor.style.backgroundColor = "#f2f2f2";
};
