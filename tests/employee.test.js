const Employee = require("../lib/Employee");
const emp = new Employee(
  "Elizabeth Lopez-Lopez",
  "012",
  "elopez@dundermifflin.com"
);

test("getName() returns employee name", () => {
  expect(emp.getName()).toBe("Elizabeth Lopez-Lopez");
});

test("getId() returns employee Id", () => {
  expect(emp.getId()).toBe("012");
});

test("getEmail) returns employee email", () => {
  expect(emp.getEmail()).toBe("elopez@dundermifflin.com");
});

test("getRole() returns employee role", () => {
  expect(emp.getRole()).toBe("employee");
});
