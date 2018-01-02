"use strict";

let Login = require('./../../cms.login.page');
let BreadCrumb = require('./../../breadcrumb');

class AdminAdboxPage extends Login
{
    constructor() {
        super();
        this.breadcrumb = new BreadCrumb();
        this.loginInEnglish();
        this.open(this.config.routeAdminAdbox);
    }

    get baiduUserRequestsNav() {
        return browser.element('#leftContent a[title="Baidu Tuiguang"] + div a[title="User Requests"]');
    }

    get baiduReportsArchiveNav() {
        return browser.element('#leftContent a[title="Baidu Tuiguang"] + div a[title="Reports"] + div a[title="Archive"]');
    }

    get baiduReportsTemplatesNav() {
        return browser.element('#leftContent a[title="Baidu Tuiguang"] + div a[title="Reports"] + div a[title="Templates"]');
    }

    get baiduVehicleAdsTemplatesNav() {
        return browser.element('#leftContent a[title="Baidu Tuiguang"] + div a[title="Vehicle Ads"] + div a[title="Templates"]');
    }

    get baiduVehicleAdsExcludingKeywordsNav() {
        return browser.element('#leftContent a[title="Baidu Tuiguang"] + div a[title="Vehicle Ads"] + div a[title="Excluding Keywords"]');
    }

    gotoBaiduUserRequests() {
        this.baiduUserRequestsNav.click();
        return this;
    }

    gotoBaiduReportsArchive() {
        this.baiduReportsArchiveNav.click();
        return this;
    }

    gotoBaiduReportsTemplates() {
        this.baiduReportsTemplatesNav.click();
        return this;
    }

    gotoBaiduVehicleAdsTemplates() {
        this.baiduVehicleAdsTemplatesNav.click();
        return this;
    }

    gotoBaiduVehicleAdsExcludingKeywords() {
        this.baiduVehicleAdsExcludingKeywordsNav.click();
        return this;
    }
}

module.exports = AdminAdboxPage;