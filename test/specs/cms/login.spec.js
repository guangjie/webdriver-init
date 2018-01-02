let LoginPage = require('../../pageobjects/cms.login.page');
let Config = require('../../helpers/config');

describe('CMS Login page ', function() {
    let loginPage;
    let config;
    let actualPageTitle;
    let expectedPageTitle;
    let actualErrorMessage;
    let expectedErrorMessage;

    /**
     * Before all tests, the login language is set to US English (27)
     */
    before(function () {
        loginPage = new LoginPage();
        loginPage.open();
        loginPage.language.selectByValue('27');

        config = new Config();
    });

    /**
     * When trying to login with both username and password set and incorrect
     * - Login should throw and error with the predefined error message
     * - Login should stop the user from proceeding to the next page
     */
    it('should prevent login when wrong credentials are provided', function () {
        loginPage.username.setValue('abc');
        loginPage.password.setValue('abc');
        loginPage.submit();
        actualErrorMessage = loginPage.errorPanel.getText();
        expectedErrorMessage = 'Access denied.\n' +
            'Please check your username and password and enable cookies in your browser settings.';

        actualPageTitle = browser.getTitle();
        expectedPageTitle = 'Login';

        expect(actualErrorMessage).to.equal(expectedErrorMessage);
        expect(actualPageTitle).to.equal(expectedPageTitle);
    });

    /**
     * When trying to login with an empty password field
     * - Login should not throw an error
     * - Login should stop the user from proceeding to next page
     */
    it('should prevent login when password is empty', function () {
        loginPage.username.setValue('abc');
        loginPage.password.setValue('');
        loginPage.submit();

        actualPageTitle = browser.getTitle();
        expectedPageTitle = 'Login';

        expect(loginPage.hasErrors()).to.equal(false);
        expect(actualPageTitle).to.equal(expectedPageTitle);
    });

    /**
     * When trying ot login with an empty username
     * - Login should not thrown an error
     * - Login should stop use from proceeding to the next page
     */
    it('should prevent username is empty', function () {
        loginPage.username.setValue('');
        loginPage.password.setValue('abc');
        loginPage.submit();

        actualPageTitle = browser.getTitle();
        expectedPageTitle = 'Login';

        expect(loginPage.hasErrors()).to.equal(false);
        expect(actualPageTitle).to.equal(expectedPageTitle);
    });

    /**
     * When trying to login with correct username and password
     * - Login should allow user to proceed to the next page
     */
    it('should allow login when correct credentials are provided', function () {
        loginPage.username.setValue(config.username);
        loginPage.password.setValue(config.password);
        loginPage.submit();

        actualPageTitle = browser.getTitle();
        expectedPageTitle = '';

        expect(actualPageTitle).to.equal(expectedPageTitle);
    });
});