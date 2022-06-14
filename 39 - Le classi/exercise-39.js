class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(form){
    if (form instanceof Square) {
      return form.side * form.side;
    } else if (form instanceof Rectangle) {
      return form.width * form.height;
    } else if (form instanceof Circle) {
      return form.radius * form.radius * Math.PI;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

//Output: dovrebbero essere coretti.