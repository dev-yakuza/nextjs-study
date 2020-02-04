import * as React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import Button from './index';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('Default', () => {
    return <Button text="Click Me" />;
  })
  .add('onClick', () => {
    return <Button text="Click Me" onClick={() => alert('clicked!')} />;
  });
