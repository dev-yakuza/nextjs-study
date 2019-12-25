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
