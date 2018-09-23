class Sorter {
  constructor() {
    var x = [];
    this.thingArray = x;
  }

  add(element) {
    this.thingArray.push(element);}

  at(index) {
    return this.thingArray[index];}

  get length() {
    return this.thingArray.length;}

  toArray() {
    return this.thingArray  }

  sort(indices) {

    var indiceArray = [];
    for(var i=0; i < indices.length; i++)
    {
      indiceArray[i] = this.thingArray[indices[i]];
    }
    indices.sort(function( a, b ){ return a - b; });
    indiceArray.sort(this.compare);    
    for(var i=0; i < indices.length; i++)
    {
      this.thingArray[indices[i]]=indiceArray[i];
    }
    
  }

  setComparator(compareFunction) {
      compare( a, b )
         { return a - b; }

      this.compare = compareFunction;
  }
}

module.exports = Sorter;
