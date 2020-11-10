import Link from 'next/link'

const About = () => (
  <div>
    <p>This is the about page!!!!!!</p>
    <div>
      <Link href="/">
        <a>Go Back!!! >>!!</a>
      </Link>
    </div>
    <img width={200} src="/zeit.png" />
  </div>
)

export default About
