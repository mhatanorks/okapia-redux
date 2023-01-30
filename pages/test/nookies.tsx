import { GetServerSideProps } from "next";
import Link from "next/link";
import nookies from "nookies";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let cookies = nookies.get(ctx);

  return {
    props: {
      server: true,
      cookies,
    },
  };
};

export default function Home(props: any) {
  // Data
  const cookies = props.cookies;
  console.log(cookies);

  return (
    <>
      <h1>List</h1>

      <p>
        Navigate between pages to create, remove and list cookies. You can also
        check them in the console.
      </p>
      {/* Links */}
      <nav>
        <ul>
          <li>
            <Link href="/test/create">Create Cookies</Link>
          </li>

          <li>
            <Link href="/test/destroy">Remove cookies</Link>
          </li>
        </ul>
      </nav>

      {/* Cookies */}
      <div>
        <h3>Cookies</h3>
        <ul>
          {Object.keys(cookies).map((names) => {
            return (
              <li key={names}>
                {names} : {cookies[names]}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
