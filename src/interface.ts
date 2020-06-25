export {};

class Mahoutsukai {}
class Souryo {}

class Taro extends Mahoutsukai {}

interface Kenja {
  //処理の実態がないメソッドの宣言＝シグネチャ
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
