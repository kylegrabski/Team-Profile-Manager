const Engineer = require("../lib/engineer");


describe("Engineer", () => {
  describe("Initialization", () => {
    test("Can initialize an engineer object", () => {
      const e = new Engineer();
      expect(typeof e).toBe("object");
    });

    test("Can set name attribute with constructor", () => {
      const name = "Kyle";
      const e = new Engineer(name);
      expect(e.name).toBe(name);
    });

    test("Can set ID attribute", () => {
      const id = 77;
      const e = new Engineer("Kyle", id);
      expect(e.id).toBe(id);
    });

    test("Can set Email attribute", () => {
      const email = "kyle.grabski@gmail.com";
      const e = new Engineer("Kyle", 77, email);
      expect(e.email).toBe(email);
    });

    test("Can set Office Number attribute", () => {
      const github = 'kylegrabski';
      const e = new Engineer("Kyle", 77, "kyle.grabski@gmail.com", github);
      expect(e.github).toBe(github);
    });
  });

  describe("getters", () => {
      test("Can get name via the getRole method", () => {
          const role = "Engineer"
          const e = new Engineer("Kyle", 77, "kylegrabski", role);
          expect(e.getRole()).toBe(role);
      })
  })
});