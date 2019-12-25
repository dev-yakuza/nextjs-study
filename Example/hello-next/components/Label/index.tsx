import Styled from 'styled-components';

const Text = Styled.p`
    color: yellow;
`;

interface Props {
  text: string;
}

const Label = ({ text }: Props) => {
  return <Text>{text}</Text>;
};

export default Label;
