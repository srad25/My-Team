const Employee = require("../lib/Employee");

test("Can create new employee object", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name of new employee", () => {
  const name = "Sean";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id of new employee", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email of new employee", () => {
  const testValue = "test@gmail.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name from getName()", () => {
  const testValue = "Sean";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id from getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email from getEmail()", () => {
  const testValue = "test@gmail.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Sean", 1, "test@gmail.com");
  expect(e.getRole()).toBe(testValue);
});