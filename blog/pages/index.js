import Link from 'next/link'
import { Hello } from '../../components/Hello.tsx'
import { libtest } from '../../libs/libs'

export default function Blog() {
  return (
    <div>
      <Hello />
      <h3>This is our blog</h3>
      <ul>
        <li>
          <Link href="/blog/post/[id]" as="/blog/post/1">
            <a>Post 1</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/post/[id]" as="/blog/post/2">
            <a>Post 2</a>
          </Link>
        </li>
      </ul>
      <a href="/">{libtest()}</a>
      <div>
        <img
          width={200}
          src={`nextjs2.png`}
        />
      </div>
    </div>
  )
}
