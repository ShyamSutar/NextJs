import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A blog for hunting coders by a hunting coder" />
        <meta name="keyword" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={`${styles.title} font-bold`}>
          Hunting Coder
        </h1>
        
       <div className="pt-6"><Image src="/homeImg.jpg" width={532} height={400} className="rounded"/></div>

        <p className={styles.description}>
         A blog for hunting coders by a hunting coder
        </p>
        

      <div className="blogs">
      <h2 className='text-3xl font-bold'>Popular Blogs</h2>
        <div className="blogItem">
          <h3 className="text-xl font-bold">How to learn JavaScript in 2022</h3>
          <p>JavaScript is the language used to design logic for the web</p>
          <h3 className="text-xl font-bold">How to learn JavaScript in 2022</h3>
          <p>JavaScript is the language used to design logic for the web</p>
          <h3 className="text-xl font-bold">How to learn JavaScript in 2022</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
