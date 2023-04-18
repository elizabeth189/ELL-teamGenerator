const Intern = require("../lib/Intern");
const intern = new Intern(
  "Megan Intern",
  "007",
  "internmegan@dundermifflin.com",
  "Lely HS"
);

test("constructor returns name, id #, email, and school", () => {
  expect(intern.name).toBe("Megan Intern");
  expect(intern.id).toBe("007");
  expect(intern.email).toBe("internmegan@dundermifflin.com");
  expect(intern.school).toBe("Lely HS");
});

test("getSchool() returns intern school", () => {
  expect(intern.getSchool()).toBe("Lely HS");
});

test("getRole() returns role of Intern", () => {
  expect(intern.getRole()).toBe("Intern");
});
