const Engineer = require("../assets/lib/engineer");

test("Can set GitHub username via constructor argument", () => {
    const testValue = "lweine01";
    const e = new Engineer("Foo", 2, "test@test.com", testValue);
    expect(e.gitHub).toBe(testValue);
});

test("Can get GitHub username via getGitHub", () => {
    const testValue = "lweine01";
    const e = new Engineer("Foo", 2, "test@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 2, "test@test.com", "lweine01");
    expect(e.getRole()).toBe(testValue);
});