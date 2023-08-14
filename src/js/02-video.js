const obj = {
  a: 10,
  b: 20,
};

localStorage.setItem('a', JSON.stringify([1, 2, 3, 4, 5]));
console.log(localStorage.getItem('a'));
