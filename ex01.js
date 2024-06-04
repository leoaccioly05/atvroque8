function fatorialRecursivo(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * fatorialRecursivo(n - 1);
    }
  }
  
  const resultado = fatorialRecursivo(5);
  console.log(resultado);
  