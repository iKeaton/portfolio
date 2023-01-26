"use client";
import Image from "next/image";
import Link from "next/link";
import Clock from "react-live-clock";
import { Suspense } from "react";
import { Technology } from "../components/Technology";
import { Job } from "../components/Job";

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

export default function Home() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="flex w-screen h-screen max-sm:h-fit flex-col py-2">
      <div className="h-32 max-w-12 animate-slide-up font-monospace">
        <div className="absolute inline-flex top-5 left-10 bg-gray-200/50 drop-shadow-md px-3 py-1 rounded-lg border border-gray-300">
          <h1>Keaton M.</h1>
        </div>
        <div className="absolute inline-flex top-5 right-10 bg-gray-200/50 drop-shadow-md px-3 py-1 rounded-lg border border-gray-300">
          <h1>{date}</h1>
          <Clock className="ml-2" format={"h:mm:ssa"} ticking={true} />
        </div>
      </div>

      <div className="flex flex-col items-center px-20 py-20 text-center">
        <h1 className="text-3xl font-semibold animate-slide-up">
          introduction
        </h1>

        <h1 className="mt-3 lg:max-w-2xl animate-slide-up font-monospace">
          Hi, I&#39;m Keaton. I am a self-taught software engineer from Florida.
          I am currently pursuing full-stack web development to create stunning
          user experiences on the front-end, and scalable and secure
          infrastructure on the backend.
        </h1>

        <h1 className="mt-10 font-semibold text-3xl animate-slide-up">
          experience
        </h1>

        <div className="flex flex-col items-center justify-center text-center max-sm:w-96 p-1 mt-5 animate-slide-up">
          <Job
            title="Software Engineer @ Fractal"
            when="January 2023 - Present"
            description="I am currently working on the landing page as well as the dashboard for Fractal."
          />
          <Job
            title="Software Engineer @ Freelance"
            when="May 2021 - Present"
            description="I am currently working on a few freelance projects for clients."
          />
        </div>

        <h1 className="mt-10 font-semibold text-3xl animate-slide-up">
          technologies
        </h1>

        <div className="flex flex-wrap flex-row justify-center p-1 bg-gray-200/50 drop-shadow-md px-3 py-1 rounded-lg border border-gray-300 mt-5 mb-12 animate-slide-up">
          <Technology icon={SiReact} />
          <Technology icon={SiTypescript} />
          <Technology icon={SiNextdotjs} />
          <Technology icon={SiTailwindcss} />
        </div>
      </div>

      <footer className="flex pb-5 items-center justify-center font-monospace animate-slide-up">
          <h1>this website is open source on my{' '}</h1>
          <Link href="https://github.com/iKeaton/portfolio" target='_blank'>
            <h1 className="ml-2 text-black-500 hover:text-black-700 underline">github</h1>
          </Link>
          .
      </footer>
    </div>
  );
}
