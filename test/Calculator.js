const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('calculator', function () {
    let calculator;

    beforeEach(async function () {
        const Calculator = await ethers.getContractFactory('calculator');
        calculator = await Calculator.deploy();
        await calculator.deployed();
    });

    it('should return correct addition result', async function () {
        const a = 10;
        const b = 20;
        const setValue = await calculator.setAB(a, b);
        await setValue.wait();


        const setOperation = await calculator.operation("+");
        await setOperation.wait();
        const actualResult = await calculator.ans();
        const expectedResult = a + b;
        expect(actualResult).to.equal(expectedResult);
    });

    it("should clear the answer equal to 0", async function () {
        const a = 10;
        const b = 20;
        const setValue = await calculator.setAB(a, b);
        await setValue.wait();
        const setOperation = await calculator.operation("+");
        await setOperation.wait();

        expect(await calculator.ans()).to.not.equal(0);
        await calculator.clearAns();
        expect(await calculator.ans()).to.equal(0);

        
    })



});
