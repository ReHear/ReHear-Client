import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button } from './Button';

const stories = storiesOf('Atoms|Button', module);

stories.add('primary', () => <Button>Ceci est un bouton</Button>);
