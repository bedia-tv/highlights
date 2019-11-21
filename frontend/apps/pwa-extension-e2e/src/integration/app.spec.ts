import { getGreeting } from '../support/app.po';

describe('pwa-extension', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to pwa-extension!');
  });
});
