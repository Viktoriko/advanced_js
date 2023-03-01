'use strict';

// Сделать с помощью Set уникализацию массива объектов:
// [
//   { id: 1, name: 'Вася' },
//   { id: 2, name: 'Петя' },
//   { id: 1, name: 'Вася' },
// ];

const arr = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Витя' },
  { id: 2, name: 'Петя' },
];

const newArr = arr.map((el, i, arr) => {
  let elemFind = arr.find(({ id }) => el.id === id);
  return elemFind ? elemFind : el;
});

const arrUniq = [...new Set(newArr)];

console.log({ arr, arrUniq });
