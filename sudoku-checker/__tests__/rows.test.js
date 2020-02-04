import { Rows } from '../src/rows.js';

describe('Rows', () => {

  test('should have a value for each of the 9 rows', () => {
    var rows = new Rows(1,2,3,4,5,6,7,8,9);
    expect(rows.row0).toEqual(1); 
    expect(rows.row1).toEqual(2);
    expect(rows.row2).toEqual(3);
    expect(rows.row3).toEqual(4);
    expect(rows.row4).toEqual(5);
    expect(rows.row5).toEqual(6);
    expect(rows.row6).toEqual(7);
    expect(rows.row7).toEqual(8);
    expect(rows.row8).toEqual(9);
  });

  test('should have a sum of 45', () => {
    var rows = new Rows([1,2,3,4,5,6,7,8,9], [], [], [], [], [], [], [], []);
    expect(rows.row0).toEqual(45);
  });


  // test('should correctly determine whether three lengths are not a triangle', () => {
  //   var notTriangle = new Triangle(3,9,22);
  //   expect(notTriangle.checkType()).toEqual("not a triangle");
  // });
  // test('should correctly determine whether three lengths make a scalene triangle', function() {
  //   var scalTriangle = new Triangle(4,5,7)
  //   expect(scalTriangle.checkType()).toEqual("scalene triangle");
  // });
  // test('should correctly determine whether three lengths make an isosceles triangle', () => {
	//   var isocTriangle = new Triangle(5,5,7)
	//   expect(isocTriangle.checkType()).toEqual("isosceles triangle");
// });
});