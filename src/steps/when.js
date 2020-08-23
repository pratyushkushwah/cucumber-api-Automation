import pause from '../support/actions/pause';

const { When } = require('cucumber');

When(
    /^I pause for (\d+)ms$/,
    pause
);
