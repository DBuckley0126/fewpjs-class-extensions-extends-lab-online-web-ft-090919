// Your code here
class Polygon {
  constructor(array) {
    this.sidesOfShape = array
  }

  get countSides(){
    return this.sidesOfShape.length
  }

  get perimeter(){
    return this.sidesOfShape.reduce((total, value) => {return total + value})
  }


}

class Triangle extends Polygon {
  get isValid(){
    let isValid = true
    switch (true){
      case this.addTwoSides(0,1,2):
        isValid = false
        break
      case this.addTwoSides(1,2,0):
        isValid = false
        break
      case this.addTwoSides(0,2,1):
        isValid = false
        break
    }
    return isValid
  }

  addTwoSides(index1, index2, checkIndex3){
    if ((this.sidesOfShape[index1] + this.sidesOfShape[index2]) < this.sidesOfShape[checkIndex3]){
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon{
  get isValid(){
    return this.sidesOfShape.every((val, i, arr) => val === arr[0])
  }

  get area(){
    return this.sidesOfShape[0] * this.sidesOfShape[1]
  }

}
