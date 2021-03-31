const Manager = require("../lib/Manager");
//const Employee = require("../lib/Employee");

test("Can set office number by using constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("Can get office number by getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@gmail.com", 100);
  expect(e.getRole()).toBe(testValue);
});
