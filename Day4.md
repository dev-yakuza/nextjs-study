# styled-components

## install

```bash
npm install --save styled-components
npm install --save-dev @types/styled-components babel-plugin-styled-components
```

## .babelrc

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

## start

```bash
npm run dev
```

## Hello world

- pages/index/index.tsx

```js
import Styled from 'styled-components';

const Cotainer = Styled.div`
  background-color: red;
`;

interface Props {}
const Index = ({}:Props) => {
  return (
    <Container>
      <p>Hello world</p>
    </Container>
  );
};

export default Index;
```
