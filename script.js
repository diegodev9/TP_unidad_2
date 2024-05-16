function calc(operation) {
  let op1 = Number(document.getElementById('op1').value)
  let op2 = Number(document.getElementById('op2').value)

  let result = calculator(op1, op2, eval(operation))
  document.getElementById('result').placeholder = result;
}

function calculator(n, m, cb) {
  console.log(n,m,cb)
  return cb(n, m);
}

const reset = () => {
  let result = document.getElementById('result');
  let op1 = document.getElementById('op1')
  let op2 = document.getElementById('op2')

  result.placeholder = 'resultado';
  op1.placeholder = 'numero 1'
  op1.value = '';
  op2.placeholder = 'numero 2'
  op2.value = '';
}

const sum = (n, m) => n + m;
const substract = (n, m) => n - m;

function multiply(n, m) {
  return n * m;
}

const divide = (n, m) => n / m;

/*
console.log(calculator(10,5, sum))
console.log(calculator(10, 5, multiply))
*/
