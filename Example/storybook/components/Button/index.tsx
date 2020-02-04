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
