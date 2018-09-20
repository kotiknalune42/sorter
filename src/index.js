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
    var indiceArray = new Array(indices.length);    
    
    for (var i = 0, i < indices.length; i++) {
       indiceArray.push(this.array[indices[i]]);
        }; 
    
    var comparing = this.compare ? this.compare : ((a,b) => (a - b));
    indices.sort((a,b) => (a - b)); 
    indiceArray.sort(comparing);  
    
    for (var i = 0, i < indices.length; i++){
      this.array[indices[i]] = indiceArray[i];
    }
  }
  
  setComparator(compareFunction) {
      this.compare = compareFunction;
  }
}

module.exports = Sorter;
