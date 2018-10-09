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
  let x = s;
  let a = x.length;
  let y = x.substring(0, x.length - 1);
  document.getElementById("numb").value = y;
};
function result(x) {
  let resul = x;
  resul = parseFloat("resul");
  console.log(resul);
  return resul;
};
function equally(res) {

};
