class Sorter {

  constructor() {
    var x = [];
    this.originalArray = x;
    this.compare = function( a, b ){ return (parseInt(a) - parseInt(b)); };
  }

  add(element) {
    this.originalArray.push(element);
  }

  at(index) {
    return this.originalArray[index];
  }

  get length() {
    return this.originalArray.length;
  }

  toArray() {
    return this.originalArray;
  }

  sort(indexesToSort) {

    var numbers = [];
    for(var i=0; i < indexesToSort.length; i++)
    {
      numbers.push(this.originalArray[indexesToSort[i]]);
    }
    indexesToSort.sort();
    numbers.sort(this.compare);    
    for(var i=0; i < indexesToSort.length; i++)
    {
      this.originalArray[indexesToSort[i]] = numbers[i];
    }
    
  }

  setComparator(compareFunction) {
      this.compare = compareFunction;
  }
}

module.exports = Sorter;
