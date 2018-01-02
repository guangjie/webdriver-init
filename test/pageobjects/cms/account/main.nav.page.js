"use strict";

let Login = require('./../../cms.login.page');
let BreadCrumb = require('./../../breadcrumb');

class MainNavPage extends Login
{
    constructor() {
        super();
        this.breadcrumb = new BreadCrumb();
        this.loginInEnglish();
    }

    get eshopManagementNav() {
        return browser.element('#navHeadEshop_dropdown #dijit_MenuItem_0');
    }

    get partsManagementNav() {
        return browser.element('#navHeadEshop_dropdown #dijit_MenuItem_1');
    }

    get transactionalCommunicationNav() {
        return browser.element('#navHeadEshop_dropdown #dijit_MenuItem_2');
    }

    get membersManagementNav() {
        return browser.element('#navHeadEshop_dropdown #dijit_MenuItem_3');
    }

    get toggleEshopNav() {
        return browser.element('#navHeadEshop > .toggle');
    }

    gotoEshopManagement() {
        this.toggleEshopNav.click();
        this.eshopManagementNav.click();
        return this;
    }

    gotoPartsManagement() {
        this.toggleEshopNav.click();
        this.partsManagementNav.click();
        return this;
    }

    gotoTransactionalCommunications() {
        this.toggleEshopNav.click();
        this.transactionalCommunicationNav.click();
        return this;
    }

    gotoMembersManagement() {
        this.toggleEshopNav.click();
        this.membersManagementNav.click();
        return this;
    }

    hasEshopNavigationToggle() {
        return browser.isExisting('#navHeadEshop > .toggle');
    }

    hasEshopNavigation() {
        return browser.isExisting('#navHeadEshop');
    }
}

module.exports = MainNavPage;