import { useRouter } from 'next/router';

const Title = () => {
  const router = useRouter();
  const { text } = router.query;
  return <p>{text}</p>;
};

export default Title;
