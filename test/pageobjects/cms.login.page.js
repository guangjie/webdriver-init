"use strict";

let Page = require('./page');

class CmsLoginPage extends Page
{
    get username() {
        return browser.element('.loginInputText');
    }

    get password() {
        return browser.element('#loginContainer input[name=password]');
    }

    get language() {
        return browser.element('.footerBar select[name=userLanguage]');
    }

    get errorPanel() {
        return browser.element('#loginContainerError > div');
    }

    get submitButton() {
        return browser.element('#loginContainer .buttonBar button');
    }

    hasErrors() {
        return browser.isExisting('#loginContainerError > div');
    }

    submit() {
        this.submitButton.click();
    }

    open(path = null) {
        if (path == null) {
            super.open(this.config.mainDomain + 'login/');
        } else {
            super.open(path);
        }
    }

    loginInEnglish() {
        this.open(this.config.routeLogin);
        this.language.selectByValue(this.config.defaultLanguage);
        this.username.setValue(this.config.username);
        this.password.setValue(this.config.password);
        this.submit();
    }
}

module.exports = CmsLoginPage;