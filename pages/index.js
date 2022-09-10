import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    
    <div >
    <style jsx>{`
        
        * {
          
          
        }

        main{
          background-image: url('/homeImg.jpg');
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          height:94vh;
        }

        .s{
          height:100%;
        }

      `}</style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A blog for hunting coders by a hunting coder" />
        <meta name="keyword" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className=' flex justify-center items-center flex-col'>
        <h1 className={`font-bold text-white text-6xl `}>
          Hunting Coder
        </h1>
        

        <p className='text-white'>
         A blog for hunting coders by a hunting coder
        </p>
        

     
      </main>

      {/* <footer className={footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
