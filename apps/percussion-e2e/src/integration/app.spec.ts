import { getGreeting, getDrums, getAddDrumButton } from '../support/app.po';

describe('percussion', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome percussion');
  });
  it('should display drums', () => {
    getDrums().should((t) => expect(t.length).equal(2));
    getAddDrumButton().click();
    getDrums().should((t) => expect(t.length).equal(3));
  });
});
