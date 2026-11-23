import { describe, expect, it } from "vitest";
import { EMPTY_FILTERS, PARTS, filterParts, matchesQuery } from "@/lib/catalog";

describe("catalog filters", () => {
  it("Tara 0 shows only parts without cosmetic marks", () => {
    const res = filterParts(PARTS, { ...EMPTY_FILTERS, tara: 0 });
    expect(res.length).toBeGreaterThan(0);
    expect(res.every((p) => p.tara === 0)).toBe(true);
  });

  it("condition filter keeps only the chosen condition", () => {
    const res = filterParts(PARTS, { ...EMPTY_FILTERS, conditions: ["despiece"] });
    expect(res.length).toBeGreaterThan(0);
    expect(res.every((p) => p.condition === "despiece")).toBe(true);
  });

  it("finds a part by MPN regardless of dashes and case", () => {
    const part = PARTS.find((p) => p.mpn === "D16-180P1A");
    expect(part && matchesQuery(part, "d16180p1a")).toBe(true);
  });

  it("finds a part by the model it was extracted from", () => {
    const res = filterParts(PARTS, { ...EMPTY_FILTERS, query: "ProDesk 600 G3" });
    expect(res.map((p) => p.mpn)).toContain("D16-180P1A");
  });
});
