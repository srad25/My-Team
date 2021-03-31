const Engineer = require("../lib/Engineer");

test("Can set gitHub account new engineer", () => {
  const testValue = "gitHubUser";
  const e = new Engineer("Foo", 1, "test@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Can get gitHub username from getGithub()", () => {
  const testValue = "gitHubUser";
  const e = new Engineer("Foo", 1, "test@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@gmail.com", "gitHubUser");
  expect(e.getRole()).toBe(testValue);
});