const count = {
  counter: 0,
  add() {
    this.counter++;
  },
  get() {
    return this.counter;
  },
};
count.add();
count.add();
count.add();
count.add();
console.log(count.get());

const c = count

c.add();
c.add();

console.log(c.get())
