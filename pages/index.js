import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="p-12 bg-gray-100 h-screen">
      <Head>
        <title>Next.js Base Template</title>
        <meta name="description" content="Next.js Base Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold">Next.js Base Template</h1>
      <SignIn />
      <p className="mt-3">
        <code className="bg-gray-900 text-gray-400 px-3 py-2 rounded select-all">
          yarn create next-app -e https://github.com/manishrc/next-base
        </code>
      </p>
    </div>
  );
}

function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
