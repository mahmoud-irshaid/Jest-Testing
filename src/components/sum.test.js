import { sum } from './sum'


describe('example tests', () => {


    it("should add 1 + 2 to equal 3", () => {
        const res = sum(1, 2);
        expect(res).toBe(3)
    })


    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({})
    })

})


describe('truthy or falsy', () => {

    it("null", () => {
        const n = null;
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()
        expect(n).toBeNull()
        // expect(n).toBeUndefined()

    })
})


describe('numbers', () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(4)
        expect(value).toBeLessThan(7)
        expect(value).toBeLessThanOrEqual(4)
    })



    it("adding floats", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.299)
    })
})


describe('strings', () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    })
})



describe('arrays', () => {
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'paper towles', 'milk'
    ]

    expect(shoppingLists).toContain('milk')
})




function compileAndriodCode(params) {
    throw new Error("you are using the wrong JDK")
}

describe('exceptions', () => {
    it("compiling android goes as expected", () => {
        expect(() => compileAndriodCode()).toThrow("you are using the wrong JDK")
    })
})
