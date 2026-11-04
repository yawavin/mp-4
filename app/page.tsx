import JwstInfo from '../components/JwstInfo'
import Link from 'next/link';
export default async function Home() {

    return (
    <>
        <nav>
            {/*ESLint: Do not use an `<a>` element to navigate to `/`. Use `<Link />` from `next/link` instead. See: https://nextjs.org/docs/messages/no-html-link-for-pages (@next/next/no-html-link-for-pages)*/}
            <Link href="/">Home</Link>   |

            <Link href="/about">About</Link>
        </nav>
        <JwstInfo/>
    </>
  );
}
