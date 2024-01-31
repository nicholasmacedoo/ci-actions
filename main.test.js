import { expect, test } from "vitest";
import { calc } from "./main";

test('Testar calculo 13 + 12 igual a 25', () => {
    expect(calc(13,12)).toBe(25)
})