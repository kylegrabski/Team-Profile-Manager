const Manager = require("../lib/manager");


describe("Manager", () => {
  describe("Initialization", () => {
    test("Can initialize a manager object", () => {
      const e = new Manager();
      expect(typeof e).toBe("object");
    });

    test("Can set name attribute with constructor", () => {
      const name = "Kyle";
      const e = new Manager(name);
      expect(e.name).toBe(name);
    });

    test("Can set ID attribute", () => {
      const id = 77;
      const e = new Manager("Kyle", id);
      expect(e.id).toBe(id);
    });

    test("Can set Email attribute", () => {
      const email = "kyle.grabski@gmail.com";
      const e = new Manager("Kyle", 77, email);
      expect(e.email).toBe(email);
    });

    test("Can set Office Number attribute", () => {
      const officeNumber = 42;
      const e = new Manager("Kyle", 77, "kyle.grabski@gmail.com", officeNumber);
      expect(e.officeNumber).toBe(officeNumber);
    });
  });

  describe("getters", () => {
      test("Can get name via the getRole method", () => {
          const role = "Manager"
          const e = new Manager("Kyle", 77, "kyle.grabski@gmail.com", role);
          expect(e.getRole()).toBe(role);
      })
  })
});