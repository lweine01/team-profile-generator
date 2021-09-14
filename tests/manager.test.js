const Manager = require("../assets/js/manager");

test("Can set office number via constructor argument", () => {
    const testValue = "1234";
    const e = new Manager("Foo", 2, "test@test.com", testValue);
    expect(e.office).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = "1234";
    const e = new Manager("Foo", 2, "test@test.com", testValue);
    expect(e.getOffice()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 2, "test@test.com", "1234");
    expect(e.getRole()).toBe(testValue);
});