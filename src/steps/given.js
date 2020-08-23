import openWebsite from '../support/actions/openWebsite';

const { Given } = require('cucumber');

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);
