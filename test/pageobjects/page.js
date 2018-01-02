"use strict";

let Config = require('./../helpers/config');

class Page
{
    constructor() {
        this.config = new Config();
    }

    open(path) {
        browser.url(path);
    }

    getUrl() {
        return browser.getUrl();
    }
}

module.exports = Page;