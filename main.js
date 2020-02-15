//Built-in Objects exercises.

/*---------- String ----------*/
/*
Crear una función que reciba un string como parametro y que al ser llamada haga
un console.log mostrando el length del string recibido.

Ex:
myFunc('myString');
*/

/*------------------------------ Solución ------------------------------------------- */
function myString(valueStr) {
    console.log(valueStr.length);
  }
  myString("we are the champions, my friends");
  /*----------------------------------------------------------------------------------- */
  
  /*---------- Number ----------*/
  /*
  crear una función que reciba un number, que haga lo siguiente:
  * Determinar si el numero recibido es un número entero.
  * En caso de ser entero, hacer un console.log avisando que es un entero. 
  * En caso de no ser entero, convertirlo a entero y mostar el nuevo valor usando console.log.
  
  Ex:
  myFunc(number);
  posibles casos:
  a) el número es un entero :3
  b) el número ahora es un entero con valor de (valor) ;)
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  function integer(number) {
    if (Number.isInteger(number)) {
      console.log(number + "is integer");
    } else {
      console.log(
        "the number is now an integer with a value of " + Number.parseInt(number)
      );
    }
  }
  integer(6.435434);
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- Boolean ----------*/
  /*
  Crear una función que reciba un boolean, que al ser llamada haga un console.log mostrando:
  * El numero de caracteres que representan el valor del boolean recibido.
  
  Ex:
  var flag = true;
  myFunc(flag);
  expected result:  4 caracteres.
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  
  var boolean = false;
  function charactersLength(value) {
    console.log(boolean.toString().length);
  }
  charactersLength(boolean);
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- Object ----------*/
  /*
  crear una función que reciba un object, que al ser llamada haga un console.log mostrando:
  * El numero de propiedades que contiene el objeto.
  * El nombre de cada una de las propiedades del objeto.
  * El valor de cada una las propiedades del objeto.
  
  Ex:
  myFunc(obj);
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  
  let user = {
    name: "admin",
    email: "admin@gmail.com",
    password: "passwordbirthday"
  };
  function myFunc(obj) {
    console.log(Object.keys(user).length, Object.keys(user), Object.values(user));
  }
  myFunc(user);
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- Function ----------*/
  /*
  Crear una función que reciba una function, que al ser llamada haga un console log mostrando:
  * El número de argumentos que espera la funcion.
  
  Ex:
  var sum = new Function('a','b','c', 'return a + b + c');
  
  myFunc(sum);
  result: 3.
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  var addition = new Function(
  "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "return a + b + c + d + e + f"
  );
  function keeper(addition) {
    console.log(addition.length);
  }
  keeper(addition);
  /*----------------------------------------------------------------------------------- */
  
  /*---------- Array ----------*/
  /*
  Crear una función que reciba un array de strings, un número (desiredLength) y un string (template), 
  que al ser llamda haga lo siguiente:
  *Checar el numero de propiedades que tiene el array.
  *Si el numero de propiedades es menor a desiredLength por 1: 
      *Rellenar el espacio faltante dentro del array usando template.  
      *Hacer un console.log del arreglo con los cambios.
  *En caso de que no se cumpla la condición, mencionar si el array es menor o mayor que desiredLength y por cuanto.
  Ex:
  
  var arr = ['Apple', 'Banana'];
  myFunc(arr, 3, 'apple');
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  let fruits = ["apple", "banana"];
  function functionFruits(array, desiredLength, template) {
    let diference = desiredLength - array.length;
    if (diference === 1) {
      array.push(template);
      console.log(array);
    } else if (diference > 1) {
      console.log("the array is minor by " + diference);
    } else {
      console.log("the array is greater by " + Math.abs(diference));
    }
  }
  functionFruits(fruits, 5, "apple");
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- Date ----------*/
  /*
  Crear una función que al ser llamada haga dos console.log, uno mostrando la fecha actual 
  y otro que muestre cuantos milisegundos han pasado desde el 1/enero/1970 hasta ahora.
  
  myFunc();
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  function date() {
    var today = new Date();
    console.log(today.toISOString());
    console.log(Date.now());
  }
  date();
  /*----------------------------------------------------------------------------------- */
  
  /*---------- Math ----------*/
  /*
  Crear una función que reciba dos numeros (base y exponente). 
  la función al ser llamada usará el valor absoluto de base y lo elevara a la potencia 
  determinada por exponente, al final mostrar este resultado usando console.log.
  
  Ex:
  
  myFunc(-3, 2) 
  result = 9;
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  function exampleMath(a, b) {
    var c = Math.abs(a);
    console.log(Math.pow(c, b));
  }
  exampleMath(-3, 2);
  /*----------------------------------------------------------------------------------- */
  
  /*---------- RegExp ----------*/
  /*
  Dada el siguiente patrón (/([A-Z])/), crear una funcion que reciba dos strings (str, template).
  * Determine si str cumple con el patrón.
  * Si cumple, remplazar el las incidencias del patron con el valor de template.
  * Mostar el resultado usando console.log.
  * Si no, mostrar un mensaje de no coincidencia usando console.log
  
  Ex:
  myFunc(str, template)
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  var rg = new RegExp(/([A-Z])/);
  function regex(str, template) {
    if (rg.test(str)) {
      newstring = str.replace(rg, template);
      console.log(newstring);
      return;
    }
    console.log("No encuentro coincidencias");
  }
  regex("HelLo", "O");
  /*----------------------------------------------------------------------------------- */
  
  /*---------- Error ----------*/
  /*
  Crear una funcion que reciba un numero.
  *Si el número es menor o igual a 10, usar console.log para mostrar un mensaje "valor dentro de los paramatros".
  *Si el número es mayor a 10 arrojar un error con el mensaje, el valor esta fuera de los parametros.
  
  Ex: myFunc(number)
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  function myError(number) {
    if (number <= 10) {
      console.log("valor dentro de los parametros");
      return;
    }
    throw new Error("el valor esta fuera de los parametros");
  }
  myError(2);
  /*----------------------------------------------------------------------------------- */
  
  /*---------- Extra (más no opcional) ----------*/
  /*
  Usar los objetos vistos en clase y aplicarlos para solucionar un escenario que pueda ocurrir 
  entre los proyectos finales que tienen asignados.
  
  Describir el caso: 
  Mi proyecto es un chatbot.
  El chatbot hará preguntas que sólo admitiran como respuesta "si" o "no", respuesta de 2 letras solamente,
  si el usuario da una respuesta de un lenght diferente, el chatbot le dirá que no es una respuesta valida.

  // DUDA
  Aquí tengo una duda, funciona el código pero primero tendría que convertir mi string a number para que pudiera
  comparar contra otro number, no? 
  
  Mostrar la solucíon en código:
  */
  function errorChatbot(answer) {
    if (answer <= 2) {
      console.log("validating response");
      return;
    }
    throw new Error("invalid answer");
  }
  errorChatbot(2);