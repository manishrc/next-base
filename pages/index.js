import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-2 bg-gray-100 h-screen">
      <Head>
        <title>Next.js Base Template</title>
        <meta name="description" content="Next.js Base Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Next.js Base Template</p>
      <p className="mt-3">
        <code className="bg-gray-900 text-gray-400 px-3 py-2 rounded select-all">
          yarn create next-app -e https://github.com/manishrc/next-base
        </code>
      </p>
    </div>
  );
}
