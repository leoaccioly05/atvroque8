function potenciaRecursiva(base, expoente) {
    if (typeof base !== 'number' || typeof expoente !== 'number' || base <= 0 || expoente < 0 || !Number.isInteger(expoente)) {
      throw new Error('Base deve ser um número positivo e expoente deve ser um número inteiro não-negativo');
    }
  
    if (expoente === 0) {
      return 1;
    } else {
      return base * potenciaRecursiva(base, expoente - 1);
    }
  }
  
  try {
    const resultado = potenciaRecursiva(2, 5);
    console.log(resultado);
  } catch (error) {
    console.error(error.message);
  }
  