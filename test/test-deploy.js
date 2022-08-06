const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        /// First Option
        assert.equal(currentValue.toString(), expectedValue)
        /// Second Option
        expect(currentValue.toString()).to.equal(expectedValue)
    })

    it("should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("should store number and name", async function () {
        const length = simpleStorage.people.length
        const response = await simpleStorage.addPerson("name", 10)
        await response.wait(1)
        const updatelength = simpleStorage.people.length

        assert.equal(updatelength, length)
    })
})
