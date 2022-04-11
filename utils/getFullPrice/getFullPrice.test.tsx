import "@testing-library/jest-dom";
import { getFullPrice } from "./getFullPrice";

describe("utils -> getFullPrice", () => {
  test("return correct value", () => {
    expect(getFullPrice([{ price: "2000" }, { price: "2000" }])).toEqual(4000);
  });
});
