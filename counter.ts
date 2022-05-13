import Counter from './class.ts'

const counter = new Counter(0)

counter.increment()
counter.increment()

console.log(counter.getNumber())
