// let animals = ['elephant', 'zebra', 'bear', 'tiger']
let animals = []

beforeAll(() => {
    console.log("Before All");
    animals = ['elephant', 'zebra', 'bear', 'tiger']
})

beforeEach(() => {
    console.log("Before Each");
    animals = ['elephant', 'zebra', 'bear', 'tiger']
})

afterEach(() => {
    console.log("After Each");
    animals = ['elephant', 'zebra', 'bear', 'tiger']
})

afterAll(() => {
    console.log("After All");
    animals = ['elephant', 'zebra', 'bear', 'tiger']
})

describe('animals array', () => {

    it("should add animal to end of array", () => {
        animals.push('aligator');
        expect(animals[animals.length - 1]).toBe('aligator')
    })

    it("should add animal to beginnig of array", () => {
        animals.unshift('donkey');
        expect(animals[0]).toBe('donkey')
    })


    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4)
    })

})


describe('testing somthin else', () => {
    it.only("true should be truthy", () => {
        expect(true).toBeTruthy()
    })
})