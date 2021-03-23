const Employee = require("../lib/employee");

// take a look at what are asked for an employee
// and make sure it is getting that value

describe("Employee", () => {
  describe("Initialization", () => {
    test("Can initialize an employee object", () => {
      const e = new Employee();
      expect(typeof e).toBe("object");
    });

    test("Can set name attribute with constructor", () => {
      const name = "Kyle";
      const e = new Employee(name);
      expect(e.name).toBe(name);
    });

    test("Can set ID attribute", () => {
      const id = 77;
      const e = new Employee("Kyle", id);
      expect(e.id).toBe(id);
    });

    test("Can set ID attribute", () => {
      const email = "kyle.grabski@gmail.com";
      const e = new Employee("Kyle", 77, email);
      expect(e.email).toBe(email);
    });
  });

  describe("getters", () => {
      test("Can get name via the getName method", () => {
          const name = "Kyle"
          const e = new Employee(name, 77, "kyle.grabski@gmail.com");
          expect(e.getName()).toBe(name);
      })

      test("Can get name via the getID method", () => {
          const id = 77;
          const e = new Employee("Kyle", id, "kyle.grabski@gmail.com");
          expect(e.getId()).toBe(id);
      })

      test("Can get name via the getEmail method", () => {
          const email = "kyle.grabski@gmail.com"
          const e = new Employee("Kyle", 77, email);
          expect(e.getEmail()).toBe(email);
      })
      
      test("Can get name via the getRole method", () => {
        const e = new Employee("Kyle", 77, "kyle.grabski@gmail.com")

          expect(e.getRole()).toBe("Employee");
      })
  })
});
