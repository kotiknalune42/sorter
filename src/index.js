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
    var sortedIndices = [];
    for (var i = 0; i < indices.length; i++){
          sortedIndices.push(this.list[indices[i]]);
      }
      indices.sort(function (a, b) return a.value - b.value;});
      sortedIndices.sort(this.compareFunction);
    
   /*sort by value  >>> items.sort(function (a, b) return a.value - b.value;}); */

      for(let x = 0; x < indices.length; x++){
        this.list[indices[x]] = sortedIndices[x];
      }

      return this.list;
    
  }

  setComparator(compareFunction) {
      this.compare = compareFunction;
  }
}

module.exports = Sorter;
