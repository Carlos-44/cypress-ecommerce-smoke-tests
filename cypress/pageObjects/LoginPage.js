class LoginPage {
  visit() {
    cy.visit("/");
  }

  login({ username, password }) {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }

  loginButton() {
    return cy.get('[data-test="login-button"]');
  }
}

export default LoginPage;
