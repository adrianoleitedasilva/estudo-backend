const divisao = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (divisor === 0) {
        reject("Não é possível dividir por zero");
      } else {
        resolve(dividendo / divisor);
      }
    }, 2000);
  });
};

console.log(divisao(4,2))


divisao(4, 2)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(".cath do dividir: ", error);
  });

