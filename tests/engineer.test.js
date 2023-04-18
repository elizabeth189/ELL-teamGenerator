const Engineer = require("../lib/Engineer");

const engineer = new Engineer(
  "Ryan Howard",
  "005",
  "rhoward@dundermifflin.com",
  "github.com/ryhow49"
);

test("constructor returns name, id, email, github", () => {
  expect(engineer.name).toBe("Ryan Howard");
  expect(engineer.id).toBe("005");
  expect(engineer.email).toBe("rhoward@dundermifflin.com");
  expect(engineer.github).toBe("github.com/ryhow49");
});

test("get Role() returns role of Engineer", () => {
  expect(engineer.getEmail()).toBe("rhoward@dundermifflin.com");
});

test("getGithub() returns github of Engineer", () => {
  expect(engineer.getGithub()).toBe("github.com/ryhow49");
});
