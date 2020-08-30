import pause from '../support/actions/pause';

const { When } = require('cucumber');

When(
    /^I pause for (\d+)ms$/,
    pause
);

When(
    /^I do shadow$/, () => {
      let lightDomElement = $('#allBooks');
      let shadowDomElement = lightDomElement.shadow$('#bookTitle'); 
      console.log(shadowDomElement);
      console.log(shadowDomElement.getText());

      lightDomElement = $('#allBooks');
      shadowDomElement = lightDomElement.shadow$$('.templateArticle'); 
      console.log(shadowDomElement);
      console.log(shadowDomElement.length);
    }
);