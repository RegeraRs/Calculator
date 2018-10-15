function disable() {
  document.onkeydown = function(e) {
    return false;
  }
}
disable();

function number(x) {
  document.getElementById("numb").value += x;
};
function reset(s) {
  let y = s.substring(0, s.length - 1);
  document.getElementById("numb").value = y;
};
function result(x) {
  console.log(typeof x);
  const result = eval(x);
  document.getElementById("numb").value = result;
  return result;
};
function plus(){
  alert("plus");
};
