import { validateUrl } from "../js/validateUrl";

describe("Test: 'validateUrl()'", () => {
    test('Should be defined', () => {
        expect(validateUrl).toBeDefined();
    });


    test("it returns true when valid urls are entered", () => {
        const urls = [
            "https://example.com",
            "http://example.com",
            "example.com",
            "example.com/path",
            "https://www.example.com",
            "www.example.com"
        ];

        urls.forEach(url => {
            expect(validateUrl(url)).toBeTruthy;
        });
    });

    test('It should be return false if invalid URL is passed into it', () => {
        expect(validateUrl("google.")).toBeFalsy();
    });
});