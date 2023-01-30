import React from 'react'
import Link from 'next/link'
import nookies from 'nookies'
import { GetServerSideProps } from 'next'

/* Website, SSR */

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let cookies = nookies.get(ctx)
    for (const cookie of Object.keys(cookies)) {
        nookies.destroy(ctx, cookie)
      }
    return {
      props: {
        server: true,
        cookies,
      },
    }
  }
  

export default function Home (props: any) {
  

    return (
      <>
        <h1>Destroy</h1>

        <p>We've removed every cookie. Check it out in the list page.</p>

        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link href="/test/nookies">
                List cookies
              </Link>
            </li>

            <li>
              <Link href="/test/create">
                Create cookies
              </Link>
            </li>
          </ul>
        </nav>

        {/*  */}
      </>
    )
}
