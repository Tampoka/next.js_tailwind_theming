import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../src/components/atom/Button/Button";
import Navbar from "../src/components/Navbar";

const Home: NextPage = () => {
  return (
      <div>
          <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Navbar />
          <main className="py-10 px-5 flex flex-col gap-10">
              <section>
                  <div className="flex flex-row flex-wrap gap-10">
                      <Button btnType="primary">Primary</Button>
                      <Button btnType="secondary">Secondary</Button>
                      <Button btnType="accent">Accent</Button>
                      <Button btnType="ghost">Ghost</Button>
                      <Button btnType="link">Link</Button>
                      <Button btnType="success">Success</Button>
                      <Button btnType="error">Error</Button>
                  </div>
              </section>
          </main>
      </div>
  );
};

export default Home;