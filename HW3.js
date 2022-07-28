// Задание 1

// Просто вывод числа 2 в степень 10

// let number_1 = 2;

// console.log (number_1 ** 10);

// Вывод числа в степенях от 1 до 10 с помощью массива

// let number_1 = 2;
// let number_2 = [0,2,4,8,16,32,64,128,256,512,1024];

// number_2.forEach ((elem, index) => {
//         console.log (elem);
// });



//Задание 1*

// let number_1 = 2;
// let number_2 = 3;

// const scriptik = function (number_2) {



// console.log (number_1 ** number_2 );

// } 

// scriptik (8);

//Задание 2

// Вариант 1 с помощью массива

// const smail_1 =  [':)',
//                 ':):)',
//               ':):):)',
//             ':):):):)',
//           ':):):):):)'];

// smail_1.forEach ((elem, index) => {
//     console.log (elem);
// });

// Вариант 2 с помощью массива

// const smail_1 =  [':)',
//                 ':):)',
//               ':):):)',
//             ':):):):)',
//           ':):):):):)'];

// for (let i=0; i < smail_1.length; i++){
//     console.log(smail_1[i]);
// }          

//Вариант 3 с помощью дублирования строки

// let smail_1 = ':)'; 
// let n = 1;

// while (n != 6){
// console.log (smail_1.repeat(n));
// n++
// }

//Задание 2*


// let stroka = '';
// let n = 1;


// function printSmile(stroka, numberOfRows) {


// while (n <= numberOfRows ) {
// console.log(stroka.repeat(n));
//  n++
// }

// }

// printSmile(':)', 4);

//Задание 3**


// let word = '';

// function getWordStructure(word) {
// let vowel_list = 'aeiouAEIOU';
// let cons_list = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ';
// let vCount = 0;
// let cCount = 0;

// for (let x = 0; x < word.length; x++) {
// if (vowel_list.indexOf(word[x]) !== -1) {
//   vCount += 1;


// } else if (cons_list.indexOf(word[x]) !== -1) {

//    cCount += 1;
//    }

//  }

// console.log(`Слово: ${word}`);
// console.log(`Гласных: ${vCount}`);
//  console.log(`Coласных: ${cCount}`);
// return vCount;
//  return cCount;
// }

// getWordStructure('case');
// getWordStructure('Case');
// getWordStructure('Check-list');

//Задание 4**


function isPalidrom(word) {
   
    let word_1 = word.split('');
    let isPalidrom = true;
 
 for (let index = 0; index < word_1.length; index++){
   const element = word_1[index];
 
   if (element !== word_1[word_1.length - 1 - index]) {
     isPalidrom = false;
   }
 }
    console.log (isPalidrom)
    return isPalidrom;
  }
 
 isPalidrom ('abba');
 isPalidrom ('Abba');
 isPalidrom ('AbbA');