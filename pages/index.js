import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import VideoBanner from "../components/VideoBanner";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col z-50">
        <Hero />
        <VideoBanner />
      </main>
      <footer className=""></footer>
    </div>
  );
}
