function tribonacciRecursiva(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 0;
    } else if (n === 2) {
      return 1;
    } else {
      return tribonacciRecursiva(n - 1) + tribonacciRecursiva(n - 2) + tribonacciRecursiva(n - 3);
    }
  }
  
  const termoDesejado = 5;
  const resultado = tribonacciRecursiva(termoDesejado);
  console.log(`O ${termoDesejado}º termo da sequência de Tribonacci é: ${resultado}`);
  