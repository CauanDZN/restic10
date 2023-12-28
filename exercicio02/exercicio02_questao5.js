const number = Math.floor(Math.random() * 11);

if (number >= 5 && number <= 10) {
    console.log(`O número sorteado (${number}) está entre 5 e 10, incluindo ambos.`);
} else {
    console.log(`O número sorteado (${number}) não está entre 5 e 10, incluindo ambos.`);
}
