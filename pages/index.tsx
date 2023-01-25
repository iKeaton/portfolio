import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Clock from 'react-live-clock';

import { Technology } from '../components/Technology';
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Home: NextPage = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="flex flex-col py-2 bg-gray-200 font-monospace">
      <Head>
        <title>Keaton M - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-32 max-w-12">
        <div className='absolute inline-flex top-5 left-5'>
          <h1>Keaton M.</h1>
        </div>
        <div className='absolute inline-flex top-5 right-5'>
          <h1>{date}</h1>
            <Clock className='ml-2'
              format={'h:mm:ssa'}
              ticking={true} 
            />
        </div>
      </div>
        
      <main className="flex flex-1 flex-col items-center justify-center px-20 text-center">
        
        <h1 className="text-3xl">
          who i am
        </h1>
        
        <h1 className='mt-3 w-3/6'>
          Hi, I'm Keaton. I'm a self-taught software engineer from Florida. I'm currently pursuing full-stack web development to create stunning user experiences on the front-end, and scalable and secure infrastructure on the backend.
        </h1>
        
        <h1 className="mt-10 text-3xl">
          where i've done it
        </h1>

        <h1 className="mt-10 text-3xl">
          how i do it
        </h1>

        <div className="w-fit flex flex-wrap flex-row justify-center p-1 rounded-md bg-white/10 dark:bg-black/10 mt-5 mb-12">
                <Technology icon={SiTypescript} name="TypeScript" />
                <Technology icon={SiReact} name="React" />
                <Technology icon={SiNextdotjs} name="Next.js" />
                <Technology icon={SiTailwindcss} name="TailwindCSS" />
            </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
