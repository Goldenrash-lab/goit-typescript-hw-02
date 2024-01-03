/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object,U extends object>(objA:T, objB:U) {
  return Object.assign(objA, objB);
}
const res = merge({name:'Yehor',age:20},{name:'Victor',age:56})

//Вот к такому решению я пришел, подсказал Вс код

export {}