import { describe, expect, test } from "bun:test";

import humanizeDuration from "../src/index";

const minute = 60 * 1000;
const hour = 60 * minute;
const day = 24 * hour;

describe("humanizeDuration", () => {
  test("uses the singular form", () => {
    expect(humanizeDuration(hour)).toBe("ساعة");
  });

  test("uses the dual form", () => {
    expect(humanizeDuration(2 * hour)).toBe("ساعتاين");
  });

  test("uses the 3-10 plural form", () => {
    expect(humanizeDuration(3 * hour)).toBe("3 د السوايع");
  });

  test("uses the 11-19 plural form", () => {
    expect(humanizeDuration(11 * hour)).toBe("11 لساعة");
  });

  test("uses the default plural form after 19", () => {
    expect(humanizeDuration(20 * hour)).toBe("20 ساعة");
  });

  test("keeps the existing conjunction defaults", () => {
    expect(humanizeDuration(2 * day + 3 * hour)).toBe("يوماين و 3 د السوايع");
  });

  test("supports custom options per call", () => {
    expect(humanizeDuration(26 * hour, { largest: 1 })).toBe("نهار");
  });

  test("supports seconds when units are enabled", () => {
    expect(humanizeDuration(3_000, { units: ["s"], largest: 1 })).toBe("3 د الثواني");
  });

  test("supports milliseconds when units are enabled", () => {
    expect(humanizeDuration(12, { units: ["ms"], largest: 1 })).toBe("12 لجزء ثانية");
  });
});
