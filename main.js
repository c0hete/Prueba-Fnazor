//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144....


var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 7; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);


//Para generar secuencia defini los dos primeros valores,
// y luego use un bucle para que generara el resto de los valores sumando dos valores anteriores de la secuencia.
