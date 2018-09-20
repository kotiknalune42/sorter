class Sorter {
  constructor() {
    var x = [];
    this.array = x;
  }

  add(element) {this.array.push(element);}

  at(index) {return this.array[index];}

  get length() {return this.array.length;}

  toArray() {return this.array  }

  sort(indices) {return this.array.sort(function(a, b){return a - b});}

  setComparator(compareFunction) {

  }
}

module.exports = Sorter;
