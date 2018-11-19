function disable() {
  document.onkeydown = function(e) {
    return false;
  }
}

disable();

let click = 0;
let firstNumbers;
let mainOperators;
let elemBackColor;

function operations(firstNumb, operator, element) {
  firstNumbers = +firstNumb;
  if (firstNumb !== '' && firstNumb !== 0) {
    click++;
      if (click == 1) {
        mainOperators = operator;
        elemBackColor = element;
        document.getElementById('numb').value = null;
        element.style.backgroundColor = '#c6c6c6';
      }
      else {
        alert('You already clicked!');
      };
    }
    else {
      alert('!');
    };
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
  switch (mainOperators) {
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
   case "%":
      finalResult = firstNumbers % secNumbers;
      break;
 }
  document.getElementById('numb').value = finalResult;
  elemBackColor.style.backgroundColor = '#f2f2f2';
  click = 0;
};
