function somaHarmonicaRecursiva(n) {
    if (n < 1 || !Number.isInteger(n)) {
      throw new Error("n deve ser um número inteiro positivo");
    }
  
    if (n === 1) {
      return 1;
    } else {
      return 1 / n + somaHarmonicaRecursiva(n - 1);
    }
  }
  
  try {
    const resultado = somaHarmonicaRecursiva(5);
    console.log(resultado);
  } catch (error) {
    console.error(error.message);
  }  