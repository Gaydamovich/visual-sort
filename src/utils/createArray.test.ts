import { createArray } from "./createArray";

describe("Testing createArray util", () => {
  const lengths = [10, 4, 13, 6];

  it("Should create correct length array", () => {
    lengths.forEach((length: number) => {
      const array = createArray(length);

      expect(array.length).toBe(length);
    });
  });
});
