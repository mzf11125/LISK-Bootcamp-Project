import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>KomodoToken</title>
        <meta
          name="description"
          content="Welcome to KomodoToken landing page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="grid grid-rows-[60px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <nav className="row-start-1 w-full flex justify-between items-center p-4 bg-gray-800 text-white">
          <div className="text-lg font-bold">KomodoToken</div>
          <div className="flex gap-4">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </nav>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/komodo.svg"
            alt="KomodoToken logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold text-center sm:text-left">
            Welcome to KomodoToken
          </h1>
          <p className="text-center sm:text-left">
            The future of decentralized finance.
          </p>
          <p className="text-center sm:text-left">
            KomodoToken is a playful word combining "Komoditas" (commodities)
            and "Komodo Dragon". We specialize in the tokenization of
            commodities like oil, gas, rice, and other essential goods.
          </p>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">Get started by exploring our features.</li>
            <li>Join our community and stay updated.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-blue-500 text-white hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="#token"
            >
              Get KomodoToken
            </a>
          </div>

          <div className="carousel w-full flex overflow-x-scroll gap-4 mt-8">
            <div className="flex-none w-64 h-32 bg-gray-200 flex items-center justify-center">
              <Image src="/lisk.svg" alt="Lisk logo" width={100} height={50} />
            </div>
            <div className="flex-none w-64 h-32 bg-gray-200 flex items-center justify-center">
              <Image
                src="/ethereum.svg"
                alt="Ethereum logo"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-none w-64 h-32 bg-gray-200 flex items-center justify-center">
              <Image
                src="/bitcoin.svg"
                alt="Bitcoin logo"
                width={100}
                height={50}
              />
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
