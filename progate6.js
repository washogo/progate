const animal = ["dog","cat","snake"];
animal.push("fish");
console.log(animal);

const price = [198,1980,19800];
price.forEach ((price2)=>{
  console.log(`${price2}円`);
});

const number = [10,11,13];
number.find = ((number2)=>{
  return number2%2 !== 0;
});

const number = [10,11,13];
number.filter = ((number3)=>{
  return number3%2 !== 0;
});

const number = [10,11,13];
number.map = ((number4)=>{
  return number4*100;
});