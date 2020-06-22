export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.September);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
}
COLORS.BLACK;

let green = COLORS.BLACK;

console.log(green);
