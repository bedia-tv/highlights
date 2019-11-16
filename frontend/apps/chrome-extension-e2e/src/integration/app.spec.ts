import { getGreeting } from '../support/app.po';

describe('chrome-extension', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to chrome-extension!');
  });
});
