function pellRecursiva(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return 2 * pellRecursiva(n - 1) + pellRecursiva(n - 2);
    }
  }
  
  const termoDesejado = 5;
  const resultado = pellRecursiva(termoDesejado);
  console.log(`O ${termoDesejado}º termo da sequência de Pell é: ${resultado}`);
  