const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should create an instance', () => {
        let testClass = new Employee('Nick', 1, 'some@email.com')
        expect(typeof testClass).toBe('object')
    });

    it('should set the name of the employee in the employee class', () => {
        let testName = 'Nick';
        let testClass = new Employee(testName, 1, 'Nick@email.com')
        expect(testClass.name === testName).toBe(true)
    });

    it('should set the id of the employee in the employee class', () => {
        let testId = 12;
        let testClass = new Employee('zack', testId, 'zack@email.com')
        expect(testClass.id === testId).toBe(true)
    });

    it('should set the email of the employee in the employee class', () => {
        let testEmail = 'new@email.com';
        let testClass = new Employee('zack', 3, testEmail)
        expect(testClass.email === testEmail).toBe(true)
    });

    it('should get the name of the employeeb using the .getName method', () => {
        let testName = 'tim';
        let testClass = new Employee(testName, 3, 'tim@email.com')
        expect(testClass.getName() === testName).toBe(true)
    });

    it('should get the id of the employee using the .getId method', () => {
        let testId = 12;
        let testClass = new Employee('John', testId, 'john@email.com')
        expect(testClass.getId() === testId).toBe(true)
    });

    it('should get the email of the employee using the .getEmail method', () => {
        let testEmail = 'new@email.com';
        let testClass = new Employee('John', 10, testEmail)
        expect(testClass.getEmail() === testEmail).toBe(true)
    });

    it('should get the role of the employee using the .getRole method', () => {
        let testClass = new Employee('John', 10, 'john@email.com')
        expect(testClass.getRole() === 'Employee').toBe(true)
    });
});