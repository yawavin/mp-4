import styled from "styled-components";
import Link from "next/link";

const Heading = styled.h1`
        text-align: center;
        font-size: 40px;
        margin: 10px auto;
        font-family: "Segoe UI", Roboto, sans-serif;
    `;

export default function Page() {
    return (
        <>
            <nav>
                {/*ESLint: Do not use an `<a>` element to navigate to `/`. Use `<Link />` from `next/link` instead. See: https://nextjs.org/docs/messages/no-html-link-for-pages (@next/next/no-html-link-for-pages)*/}
                <Link href="/">Home</Link>   |
                <Link href="/about">About</Link>
            </nav>
            <Heading>About</Heading>
            <p>This web app displays cool photos taken by the James Webb telescope!</p>
        </>
    );

}