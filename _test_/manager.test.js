const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should get the office number of the manager', () => {
        let testNumber = 13
        let testManager = new Manager('Nick', 13, 'Nick@email.com', testNumber)
        expect(testManager.office === testNumber).toBe(true)
    });

    it('should get the office number of the manager using the .getOffice method', () => {
        let testNumber = 13
        let testManager = new Manager('Nick', 13, 'Nick@email.com', testNumber)
        expect(testManager.getOffice() === testNumber).toBe(true)
    });

    it('should get the role of the Manager', () => {
        let testManager = new Manager('Nick', 13, 'nick@email.com', 777)
        expect(testManager.getRole() === 'Manager').toBe(true)
    });
});