import Head from 'next/head';
import Footer from '../components/footer/footer';
import StartupForm from './startup_form';

export default function Layout() {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Ideas Kenya</title>
        <meta
          name="description"
          content="Ideas Kenya is a marketplace that aims to bring entrepreneurs well versed in the new economy, who want to establish their own internet company with companies, investors and professionals."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      {/* section wrapper */}
      <main>
        <StartupForm />
      </main>

      {/* footer */}
      <Footer />
    </>
  );
}
