const helloWorld = require('../src/helloWorld.js')

describe("Testing helloWorld function",()=>{
    it("should return Hello World string",()=>{
        var actual = helloWorld();
        expect(actual).toBe("Hello World");
    });
});