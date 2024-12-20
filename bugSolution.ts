function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(10, 20); // Correct usage
let result2 = isNumber(20) ? add(10, 20) : 0; //Using type guard
let result3 = add(10, Number("20"));//type assertion