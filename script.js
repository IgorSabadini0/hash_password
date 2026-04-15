import bcrypt from "bcrypt";

const password = "mysecretpassword";

const hash = await bcrypt.hash(password, 10); //Necessário usar o await, pois a função hash é assíncrona e retorna uma Promise. O número 10 é o número de salt rounds, que determina a complexidade do hash.

console.log("Hashed password:", hash);
console.log("password:", password);