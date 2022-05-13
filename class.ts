class Counter {
    constructor(public count: number) { }
    increment(): void {
        this.count++;
    }
    getNumber(): number {
        return this.count;
    }
} 

export default Counter;
