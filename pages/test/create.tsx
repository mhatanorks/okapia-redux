import Link from 'next/link'
import nookies from 'nookies'
import React from 'react'
import { GetServerSideProps } from 'next'

const complex =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) Ap…ML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'

/* Website, SSR */

export default class Create extends React.Component {
  static getInitialProps(ctx: any) {
    nookies.set(ctx, 'one', complex, {})
    nookies.set(ctx, 'two', complex, {})
    nookies.set(ctx, 'three', "hey! this one's simple :)", {})

    return {
      server: true,
    }
  }

  render() {
    return (
      <>
        <h1>Create</h1>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link href="/test/nookies">
                List cookies
              </Link>
            </li>

            <li>
              <Link href="/test/destroy">
                Remove cookies
              </Link>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}
