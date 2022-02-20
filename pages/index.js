import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bradley Boltwood | Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header/>
        <div className="content">
          <div className="content__intro">
            <p className="intro">Hello I'm,</p>
            <h1>Bradley Boltwood</h1>
            <p className="role">Front-End Developer</p>
            </div>
          <div className="content__image"><img src="/meNew.png"/></div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
