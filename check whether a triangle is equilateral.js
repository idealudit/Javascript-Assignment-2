function classifyTriangle(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return "Equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}
//In the example usage, we've assigned the values 5, 5, and 5 to side1, side2, 
// and side3 respectively. This represents an equilateral triangle, as all sides are equal.

const side1 = 5;
const side2 = 5;
const side3 = 5;

const triangleType = classifyTriangle(side1, side2, side3);

console.log(`Side lengths: ${side1}, ${side2}, ${side3}`);
console.log(`The triangle is ${triangleType}`);


// Note *
// 1. classifyTriangle function takes three arguments: side1, side2, and side3, 
// representing the lengths of the sides of a triangle.
// 2. Inside the function, the first if condition checks if all 
// three sides are equal. If they are, the triangle is classified as "Equilateral".

