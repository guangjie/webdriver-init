let AdboxPage = require('../../../pageobjects/cms/admin/adbox.page');

describe('Admin Adbox ', function () {
    let adboxPage;

    before(function () {
        adboxPage = new AdboxPage();
    });

    /**
     * When admin clicks on User Request
     * - Admin should be directed to user request page
     * - Admin should show the user request page
     */
    it('should go to Baidu User Request when link is clicked', function () {
        adboxPage.gotoBaiduUserRequests();
        browser.waitForExist('#breadcrumb1', 5000);

        let actualBreadcrumb = adboxPage.breadcrumb.breadCrumb1.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb3.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb5.getText();
        let expectedBreadcrumb = 'AdBox Manager > Baidu Tuiguang > User Requests';

        let actualUrl = adboxPage.getUrl();
        let expectedUrl = adboxPage.config.routeAdminAdboxBaiduUserRequest;

        expect(actualBreadcrumb).to.equal(expectedBreadcrumb);
        expect(actualUrl).to.equal(expectedUrl);
    });

    /**
     * When admin clicks on Report Archive
     * - Admin should be directed to report archive page
     * - Admin should show the report archive page
     */
    it('should go to Baidu Reports Archive when link is clicked', function () {
        adboxPage.gotoBaiduReportsArchive();
        browser.waitForExist('#breadcrumb1', 5000);

        let actualBreadcrumb = adboxPage.breadcrumb.breadCrumb1.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb3.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb5.getText();
        let expectedBreadcrumb = 'AdBox Manager > Baidu Tuiguang > Reports Archive';

        let actualUrl = adboxPage.getUrl();
        let expectedUrl = adboxPage.config.routeAdminAdboxBaiduReportsArchive;

        expect(actualBreadcrumb).to.equal(expectedBreadcrumb);
        expect(actualUrl).to.equal(expectedUrl);
    });

    /**
     * When admin clicks on Report Templates
     * - Admin should be directed to report templates page
     * - Admin should show the report templates page
     */
    it('should go to Baidu Reports Templates when link is clicked', function () {
        adboxPage.gotoBaiduReportsTemplates();
        browser.waitForExist('#breadcrumb1', 5000);

        let actualBreadcrumb = adboxPage.breadcrumb.breadCrumb1.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb3.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb5.getText();
        let expectedBreadcrumb = 'AdBox Manager > Baidu Tuiguang > Report Templates';

        let actualUrl = adboxPage.getUrl();
        let expectedUrl = adboxPage.config.routeAdminAdboxBaiduReportsTemplates;

        expect(actualBreadcrumb).to.equal(expectedBreadcrumb);
        expect(actualUrl).to.equal(expectedUrl);
    });

    /**
     * When admin clicks on Vehicle Ads Templates
     * - Admin should be directed to vehicle ads templates page
     * - Admin should show the vehicle ads templates page
     */
    it('should go to Baidu Vehicle Ads Templates when link is clicked', function () {
        adboxPage.gotoBaiduVehicleAdsTemplates();
        browser.waitForExist('#breadcrumb1', 5000);

        let actualBreadcrumb = adboxPage.breadcrumb.breadCrumb1.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb3.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb5.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb7.getText();
        let expectedBreadcrumb = 'AdBox Manager > Baidu Tuiguang > Vehicle Ads > Templates';

        let actualUrl = adboxPage.getUrl();
        let expectedUrl = adboxPage.config.routeAdminAdboxVehicleAdsReportsTemplates;

        expect(actualBreadcrumb).to.equal(expectedBreadcrumb);
        expect(actualUrl).to.equal(expectedUrl);
    });

    /**
     * When admin clicks on Vehicle Ads Excluding Keywords
     * - Admin should be directed to vehicle ads excluding keywords page
     * - Admin should show the vehicle ads excluding kewords page
     */
    it('should go to Baidu Vehicle Ads Excluding Keywords when link is clicked', function () {
        adboxPage.gotoBaiduVehicleAdsExcludingKeywords();
        browser.waitForExist('#breadcrumb1', 5000);

        let actualBreadcrumb = adboxPage.breadcrumb.breadCrumb1.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb3.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb5.getText() + ' > '
            + adboxPage.breadcrumb.breadCrumb7.getText();
        let expectedBreadcrumb = 'AdBox Manager > Baidu Tuiguang > Vehicle Ads > Excluding Keywords';

        let actualUrl = adboxPage.getUrl();
        let expectedUrl = adboxPage.config.routeAdminAdboxBaiduVehicleAdsExcludingKeywords;

        expect(actualBreadcrumb).to.equal(expectedBreadcrumb);
        expect(actualUrl).to.equal(expectedUrl);
    });
});