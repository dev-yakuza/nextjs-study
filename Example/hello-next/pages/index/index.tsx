import Styled from 'styled-components';
import Link from 'next/link';

import Label from '~/components/Label';

const Cotainer = Styled.div`
  background-color: red;
`;

const Index = () => {
  const text = 'dynamic-text';

  return (
    <Cotainer>
      <Label text="Hello Next.js" />
      <Link href="/about">
        <a>go to About page</a>
      </Link>
      <Link href="/title?text=abcdefg">
        <a>go to Title page</a>
      </Link>
      <Link href={`/title?text=${text}`}>
        <a>dynamic link</a>
      </Link>
    </Cotainer>
  );
};

export default Index;
