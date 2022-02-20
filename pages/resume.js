import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function resume() {
  return (
    <div className="container">
      <Head>
        <title>Bradley Boltwood | Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header/>
        <div className="content">

        </div>          
      </main>

      <Footer />
    </div>
  )
}