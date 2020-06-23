export {};

/*  function */
// function bmi(height: number, weight: number): number {
//   return weight / (height * height);
// }

// console.log(bmi(1.78, 86));

/*  anonymous function */
// let bmi: (height: number, weight: number) => number = function (
//   height: number,
//   weight: number
// ): number {
//   return weight / (height * height);
// };

// console.log(bmi(1.78, 86));

/*  arrow function */
// let bmi: (height: number, weight: number) => number = (
//   height: number,
//   weight: number
// ): number => weight / (height * height);

// console.log(bmi(1.78, 86));

/* optional arguments */
// let bmi: (height: number, weight: number, isPrint?: boolean) => number = (
//   height: number,
//   weight: number,
//   isPrint?: boolean
// ): number => {
//   const bmi: number = weight / (height * height);

//   if (isPrint) {
//     console.log({ bmi });
//   }
//   return bmi;
// };

// bmi(1.78, 86);

/* default parameters */

// const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
//   return currentSalary * rate;
// };

// console.log(nextYearSalary(1000));
// console.log(nextYearSalary(1000, undefined));

/* rest parameters */
// const reducer = (accumulator: number, currentValue: number) => {
//   console.log({ accumulator, currentValue });
//   return accumulator + currentValue;
// };

// const sum: (...values: number[]) => number = (...values: number[]): number => {
//   return values.reduce(reducer);
// };

// console.log(sum(1, 2, 3, 4, 5));

/* over loads */
// function double(value: number): number;
// function double(value: string): string;

// function double(value: any): any {
//   // if (typeof value === 'number') {
//   //   return value * 2;
//   // } else if (typeof value === 'string') {
//   //   return value + value;
//   // } else {
//   //   throw 'error';
//   // }
//   if (typeof value === 'number') {
//     return value * 2;
//   } else {
//     return value + value;
//   }
// }

// function double(value: string): string {
//   return value + value;
// }

// console.log(double(100));
// console.log(double('Go'));
