# routing parameters

- useRouter

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
    <Link href="/title?text=abcdefg">
      <a>go to Title page</a>
    </Link>
  </Cotainer>
);

export default Index;
```

## page/title/index.tsx

```js
import { useRouter } from 'next/router';

const Title = () => {
  const router = useRouter();
  const { text } = router.query;
  return <p>{text}</p>;
};

export default Title;
```
