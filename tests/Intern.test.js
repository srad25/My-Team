const Intern = require("../lib/Intern");

test("Can set school from constructor argument", () => {
  const testValue = "UConn";
  const e = new Intern("Foo", 1, "test@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Can get school from getSchool()", () => {
  const testValue = "UConn";
  const e = new Intern("Foo", 1, "test@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@gmail.com", "UConn");
  expect(e.getRole()).toBe(testValue);
});
