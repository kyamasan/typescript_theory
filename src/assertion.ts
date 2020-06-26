export {};

// let name: any = 'Ham';

// let length = name.length as number;
// length = 'foo';

/* const-assertion */
let name = 'Taro' as const;

// name = 'Hanako';

let profile: { name: string; age: number } = {
  name: 'Taro',
  age: null,
};
