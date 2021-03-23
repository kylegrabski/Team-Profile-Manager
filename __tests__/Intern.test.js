const Intern = require("../lib/intern");


describe("Intern", () => {
  describe("Initialization", () => {
    test("Can initialize an intern object", () => {
      const e = new Intern();
      expect(typeof e).toBe("object");
    });

    test("Can set name attribute with constructor", () => {
      const name = "Kyle";
      const e = new Intern(name);
      expect(e.name).toBe(name);
    });

    test("Can set ID attribute", () => {
      const id = 77;
      const e = new Intern("Kyle", id);
      expect(e.id).toBe(id);
    });

    test("Can set Email attribute", () => {
      const email = "kyle.grabski@gmail.com";
      const e = new Intern("Kyle", 77, email);
      expect(e.email).toBe(email);
    });

    test("Can set Office Number attribute", () => {
      const school = "U of A";
      const e = new Intern("Kyle", 77, "kyle.grabski@gmail.com", school);
      expect(e.school).toBe(school);
    });
  });

  describe("getters", () => {
      test("Can get name via the getRole method", () => {
          const role = "Intern"
          const e = new Intern("Kyle", 77, "kyle.grabski@gmail.com", role);
          expect(e.getRole()).toBe(role);
      })
  })
});