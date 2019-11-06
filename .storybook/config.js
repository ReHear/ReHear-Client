import { configure, addParameters, addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import './style.css';
import '../src/index.css';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Decorators
addDecorator(jsxDecorator);

// Option defaults.
addParameters({
  options: {
    name: 'ReHear Storybook',
  },
});

configure(loadStories, module);
