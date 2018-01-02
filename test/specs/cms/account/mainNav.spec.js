let MainNavigation = require('../../../pageobjects/cms/account/main.nav.page');

describe('Main Navigation ', function() {
    let mainNavigation;

    /**
     * Before all tests, there must be a successful login
     */
    before(function () {
        mainNavigation = new MainNavigation();
        mainNavigation.open(mainNavigation.config.mainDomain + '?kid=' + mainNavigation.config.kid + '&setrid=' + mainNavigation.config.setrId);
    });

    /**
     * When user selects Eshop Management from the Navigation Bar
     * - User is redirected to Dashboard of Eshop Management Page
     */
    it('should go to Eshop Management when subnav link clicked', function () {
        mainNavigation.gotoEshopManagement();
        browser.waitForExist('#breadcrumb1', 5000);

        let actualBreadcrumb = mainNavigation.breadcrumb.breadCrumb1.getText();
        let expectedBreadcrumb = 'Dashboard';

        let actualUrl = mainNavigation.getUrl();
        let expectedUrl = mainNavigation.config.routeEshop;

        expect(actualBreadcrumb).to.equal(expectedBreadcrumb);
        expect(actualUrl).to.equal(expectedUrl);
    });

    /**
     * When user selects Parts Management from the Navigation Bar
     * - User is redirected to Parts Management Page
     */
    it('should go to Parts Management when clicked', function () {
        mainNavigation.gotoPartsManagement();
        browser.waitForExist('#breadcrumb1', 5000);

        let actualBreadcrumb = mainNavigation.breadcrumb.breadCrumb1.getText();
        let expectedBreadcrumb = 'Parts Management';

        let actualUrl = mainNavigation.getUrl();
        let expectedUrl = mainNavigation.config.routeParts;

        expect(actualBreadcrumb).to.equal(expectedBreadcrumb);
        expect(actualUrl).to.equal(expectedUrl);
    });

    /**
     * When user selects Transactional Communication from the Navigation Bar
     * - User is redirected to Transactional Communications Page
     */
    it('should go to Transactional Communication when clicked', function () {
        mainNavigation.gotoTransactionalCommunications();
        browser.waitForExist('#breadcrumb1', 5000);

        let actualBreadcrumb = mainNavigation.breadcrumb.breadCrumb1.getText();
        let expectedBreadcrumb = 'SMS Configuration';

        let actualUrl = mainNavigation.getUrl();
        let expectedUrl = mainNavigation.config.routeTransComms;

        expect(actualBreadcrumb).to.equal(expectedBreadcrumb);
        expect(actualUrl).to.equal(expectedUrl);
    });

    /**
     * When user selects Members Management from the Navigation Bar
     * - User is redirected to Members Management Page
     */
    it('should go to Members Management when clicked', function () {
        mainNavigation.gotoMembersManagement();
        browser.waitForExist('#breadcrumb1', 5000);

        let actualBreadcrumb = mainNavigation.breadcrumb.breadCrumb1.getText();
        let expectedBreadcrumb = 'Dashboard';

        let actualUrl = mainNavigation.getUrl();
        let expectedUrl = mainNavigation.config.routeMembers;

        expect(actualBreadcrumb).to.equal(expectedBreadcrumb);
        expect(actualUrl).to.equal(expectedUrl);
    });
});