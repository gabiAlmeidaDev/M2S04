let numeros = [1, 22, 31, 40, 3, 5]

let maior = numeros.reduce((atualMaior, n) => {
  if(n > atualMaior){
    return n
  } else {
    return atualMaior
  }
}, 0)

console.log(maior)
