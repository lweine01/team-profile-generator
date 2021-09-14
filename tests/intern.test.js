const Intern = require("../assets/lib/intern");

test("Can set school name via constructor argument", () => {
    const testValue = "UNCC";
    const e = new Intern("Foo", 2, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("Can get school name via getSchool()", () => {
    const testValue = "UNCC";
    const e = new Intern("Foo", 2, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
})

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 2, "test@test.com", "lweine01");
    expect(e.getRole()).toBe(testValue);
})