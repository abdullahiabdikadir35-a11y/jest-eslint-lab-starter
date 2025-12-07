
const { capitalizeWords, filterActiveUsers, logAction } = require("../index");

describe("capitalizeWords function", () => {
  it("capitalizes each word", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  it("works with empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });

  it("handles single words", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });

  it("does not break with special chars", () => {
    expect(capitalizeWords("hello-world")).toBe("Hello-world");
  });
});

describe("filterActiveUsers function", () => {
  it("filters active users correctly", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false }
    ];
    expect(filterActiveUsers(users)).toEqual([{ name: "Alice", isActive: true }]);
  });

  it("returns empty array if no active users", () => {
    const users = [
      { name: "A", isActive: false },
      { name: "B", isActive: false }
    ];
    expect(filterActiveUsers(users)).toEqual([]);
  });

  it("returns empty array if input is empty", () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

describe("logAction function", () => {
  it("logs action properly", () => {
    const log = logAction("login", "Alice");
    expect(log).toContain("User Alice did login at");
  });

  it("returns 'Invalid input' if action missing", () => {
    expect(logAction("", "Alice")).toBe("Invalid input");
  });

  it("returns 'Invalid input' if username missing", () => {
    expect(logAction("login", "")).toBe("Invalid input");
  });
});


