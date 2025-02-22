import { canUseCssGrid, canUseFocusVisible, canUseForcedColors, getKeyCode } from "./dom";
import { KeyCodes } from "./key-codes";

describe("getKeyCode", () => {
    test("should correctly handle null", () => {
        expect(getKeyCode(null)).toBe(null);
    });

    test("should correctly handle keyboard events with `keyCode` values", () => {
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    keyCode: 39,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowRight);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    keyCode: 37,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowLeft);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    keyCode: 38,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowUp);
        expect(
            getKeyCode(
                new KeyboardEvent("keydown", {
                    keyCode: 40,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowDown);
        expect(
            getKeyCode(
                new KeyboardEvent("keydown", {
                    keyCode: 13,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.enter);
        expect(
            getKeyCode(
                new KeyboardEvent("keydown", {
                    keyCode: 32,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.space);
        expect(
            getKeyCode(
                new KeyboardEvent("keydown", {
                    keyCode: 9,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.tab);
    });

    test("should correctly handle keyboard events with `which` values", () => {
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    which: 39,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowRight);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    which: 37,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowLeft);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    which: 38,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowUp);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    which: 40,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowDown);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    which: 13,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.enter);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    which: 32,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.space);
        expect(
            getKeyCode(new KeyboardEvent("keypress", { which: 9 } as KeyboardEventInit))
        ).toBe(KeyCodes.tab);
    });

    test("should correctly handle keyboard events with `charCode` values", () => {
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    charCode: 39,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowRight);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    charCode: 37,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowLeft);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    charCode: 38,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowUp);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    charCode: 40,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.arrowDown);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    charCode: 13,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.enter);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    charCode: 32,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.space);
        expect(
            getKeyCode(
                new KeyboardEvent("keypress", {
                    charCode: 9,
                } as KeyboardEventInit)
            )
        ).toBe(KeyCodes.tab);
    });
});

describe("canUseFocusVisible", () => {
    test("should not throw", () => {
        expect(() => {
            canUseFocusVisible();
        }).not.toThrow();
    });
    test("should return true if the environment supports focus-visible selectors", () => {
        expect(canUseFocusVisible()).toBe(true);
    });
});

describe("canUseCssGrid", () => {
    test("should not throw", () => {
        expect(() => {
            canUseCssGrid();
        }).not.toThrow();
    });
});

describe("canUseForcedColors", () => {
    beforeEach(() => {
        // tslint:disable-next-line:typedef
        window.matchMedia = jest.fn().mockImplementation(query => {
            return {
                matches: true,
                media: query,
            };
        });
    });
    test("should return true if forced color is enabled", () => {
        expect(canUseForcedColors()).toBe(true);
    });
});

describe("canUseForcedColors", () => {
    beforeEach(() => {
        // tslint:disable-next-line:typedef
        window.matchMedia = jest.fn().mockImplementation(query => {
            return {
                matches: false,
                media: query,
            };
        });
    });
    test("should return false if forced color is not enabled", () => {
        expect(canUseForcedColors()).toBe(false);
    });
});
