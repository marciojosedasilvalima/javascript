let num = [5, 8, 3]

num.push(9) // inclui no final do vetor
num.sort()  // ordena o vetor

console.log(`Nosso vetor é o ${num}`)
console.log(num[1])
console.log(num.length) // mostra quantos posições existem no vetor


// indexOf Procura o valor dentro do vetor
// se não encontrar o valor mostra -1
// IndexOf com O maiusculo
let nova = num.indexOf(0)

if (nova == -1) {
    console.log('O valor não existe no vetor.')
} else {
    console.log(nova)
}

