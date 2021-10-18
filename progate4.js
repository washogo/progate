class Human{
  constructor(weight,height){
    this.weight=weight;
    this.height=height;
  }

  introduction1(){
    console.log(`体重は${this.weight}kgです`);
  }

  introduction2(){
    console.log(`身長は${this.height}cmです`);
    this.introduction1();
  }
}

const man = new Human();
man.introduction2();