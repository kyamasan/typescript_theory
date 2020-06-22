export {};

type ObjectType = {
  name: string;
  age: number;
};

// typeと違って別名を付けるわけではないので、
// インターフェース単独で名前を付けることができる(その為、＝は不要)
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham',
  age: 43,
};
