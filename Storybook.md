# Storybook

## Nextjs

```bash
mkdir Storybook
cd Storybook
npm init -y
npm install --save react react-dom next
mkdir pages
```

## gitignore

```bash
# gitignore
touch .gitignore
code .gitignore

## add
node_modules
.next
```

## package.json

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
},
```

## typescript

```bash
npm install --save-dev typescript @types/react @types/node
```

- Hello world

- pages/Index/index.tsx

```js
const Index = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

export default Index;
```

- run

```bash
npm run dev
```

- tsconfig.json

```json
// "strict": false,
"strict": true,
```

## styled-components

```bash
npm install --save styled-components
npm install --save-dev @types/styled-components babel-plugin-styled-components
```

- babel

create `.babelrc` file

```json
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

## babel-plugin-root-import

```bash
npm install babel-plugin-root-import --save-dev
```

- root import babel

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ],
    [
      "babel-plugin-root-import",
      {
        "rootPathPrefix": "~",
        "rootPathSuffix": "./"
      }
    ]
  ]
}
```

- root import tsconfig.json

```json
{
  "compilerOptions": {
    ...
    "baseUrl": "./",
    "paths": {
      "~/*": ["*"]
    }
  },
  ...
}
```

## Storybook setup

- Install story book

```bash
npm install --save-dev @storybook/react babel-loader @babel/core babel-preset-react-app
```

- package.json

```json
{
  ...
  "scripts": {
    ...
    "storybook": "start-storybook"
  }
  ...
}
```

- .storybook/main.js

```js
module.exports = {
  stories: ['../**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
```

- create component: components/Button/index.tsx

```js
import Styled from 'styled-components';

const Container = Styled.div`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid gray;
  cursor: pointer;
`;

interface Props {
  text: string;
  onClick?: () => void;
}
const Button = ({ text, onClick }: Props) => {
  return <Container onClick={onClick}>{text}</Container>;
};

export default Button;
```

- create story: components/Button/index.story.tsx

```js
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Button', module)
  .add('Default', () => {
    return <Button text="Click Me" />;
  })
  .add('onClick', () => {
    return <Button text="Click Me" onClick={() => alert('clicked!')} />;
  });

```

- start storybook

```bash
npm run storybook
```

## addon center

- install

```bash
npm install --save-dev @storybook/addon-centered
```

- create story: components/Button/index.story.tsx

```js
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
```

## @storybook/addon-actions

[https://www.npmjs.com/package/@storybook/addon-actions](https://www.npmjs.com/package/@storybook/addon-actions)

- install

```bash
npm install --save-dev @storybook/addon-actions
```

- .storybook/main.js

```js
module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: ['@storybook/addon-actions/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
```

## @storybook/addon-viewport

[https://github.com/storybookjs/storybook/tree/master/addons/viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport)

- install

```bash
npm install --save-dev @storybook/addon-viewport
```

- .storybook/main.js

```js
module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: ['@storybook/addon-actions/register', '@storybook/addon-viewport/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
```

## @storybook/addon-knobs

[https://github.com/storybookjs/storybook/tree/master/addons/knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)

- install

```bash
npm install --save-dev @storybook/addon-knobs
```

- .storybook/main.js

```js
module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: ['@storybook/addon-actions/register', '@storybook/addon-viewport/register', '@storybook/addon-knobs/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
```
