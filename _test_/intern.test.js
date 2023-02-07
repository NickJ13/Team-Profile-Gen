const Intern = require('../lib/intern');
describe('Intern', () => {
    it('should set the school info of the intern properly', () => {
        let testSchool = 'OSU'
        let testIntern = new Intern('Zack', 12, 'Zack@email.com', testSchool)
        expect(testIntern.school === testSchool).toBe(true)
    });

    it('should retrieve the school info of the intern properly using the .getSchool method', () => {
        let testSchool = 'OSU'
        let testIntern = new Intern('Zack', 12, 'Zack@email.com', testSchool)
        expect(testIntern.getSchool()).toBe(testSchool)
    });

    it('should retireve the role of the intern properly', () => {
        let testIntern = new Intern('Zack', 12, 'Zack@email.com', 'OSU')
        expect(testIntern.getRole() === 'Intern').toBe(true)
    });
});