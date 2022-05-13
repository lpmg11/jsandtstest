import sortItem from './ordenarArray.ts';

const items = [
  { id: 1, value: 3, perc: 0.5 },
  { id: 2, value: 8, perc: 5.3 },
  { id: 3, value: 9, perc: 2.7 },
  { id: 4, value: 0, perc: 0.1 },
  { id: 5, value: 1, perc: 0.2 },
];

console.log(sortItem(items,'perc'));