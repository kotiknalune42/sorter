class Sorter {
  constructor() {
    var x = [];
    this.array = x;
  }

  add(element) {
    this.array.push(element);}

  at(index) {
    return this.array[index];}

  get length() {
    return this.array.length;}

  toArray() {
    return this.array  }

  sort(indices) {
    
  }

  setComparator(compareFunction) {
      this.compare = compareFunction;
  }
}

module.exports = Sorter;
