# navigation system

- Link

## page/about/index.tsx

```js
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <p>This is the about page</p>
      <Link href="/">
        <a>go to index page</a>
      </Link>
    </div>
  );
};

export default About;

```

## page/index/index.tsx

```js
import Styled from 'styled-components';
import Link from 'next/link';

import Label from '~/components/Label';

const Cotainer = Styled.div`
  background-color: red;
`;

const Index = () => (
  <Cotainer>
    <Label text="Hello Next.js" />
    <Link href="/about">
      <a>go to About page</a>
    </Link>
  </Cotainer>
);

export default Index;
```