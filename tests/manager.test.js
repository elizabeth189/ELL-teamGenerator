const Manager = require("../lib/Manager");

const manager = new Manager(
  "Dwight Schrute",
  "008",
  "dschrute@dundermifflin.com",
  "123 4567 0987"
);

test("constructor returns name, id , email, and office #", () => {
  expect(manager.name).toBe("Dwight Schrute");
  expect(manager.id).toBe("008");
  expect(manager.email).toBe("dschrute@dundermifflin.com");
  expect(manager.officeNumber).toBe("123 4567 0987");
});

test("getOfficeNumber() returns phone", () => {
  expect(manager.getOfficeNumber()).toBe("123 4567 0987");
});

test("getRole() returns role of Manager", () => {
  expect(manager.getRole()).toBe("Manager");
});
