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
