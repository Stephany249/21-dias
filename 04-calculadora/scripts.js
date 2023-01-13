function insert(num) {
  var value = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = value + num;
}

function clear() {
  document.getElementById('result').innerHTML = '';
}

function back() {
  var result = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = result.substring(0, result.length - 1)
}

function calculate() {
  var result = document.getElementById('result').innerHTML;
  if(result) {
    document.getElementById('result').innerHTML = eval(result)
  } else {
    document.getElementById('result').innerHTML = 'Nada ...'
  }
}