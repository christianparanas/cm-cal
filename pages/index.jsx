import Head from 'next/head'
import Nav from '../components/Nav'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kyle Calites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Nav page={1} />
        
        <div className="home">
          <h1 className="hometext">
            <span>K</span>
            <span>y</span>
            <span>l</span>
            <span>e</span>
            <br />
            <span>C</span>
            <span>a</span>
            <span>l</span>
            <span>i</span>
            <span>t</span>
            <span>e</span>
            <span>s</span>
          </h1>
        </div>
      </main>
    </div>
  )
}
