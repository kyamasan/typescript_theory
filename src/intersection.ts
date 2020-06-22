export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Tanaka: Pitcher1 = {
  throwingSpeed: 154,
};

const ichiro: Batter1 = {
  // throwingSpeed: 140
  battingAverage: 0.367,
};

//Batter1にはthrowingSpeedという属性を持たせることはできないので、新たな型を定義する必要がある。

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

//intersection型を用いれば、よりスマートに新たな型を再定義できる。

type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.331,
};
