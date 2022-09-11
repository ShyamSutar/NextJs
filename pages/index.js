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

        .ti{
          font-size: 72px;
          background: -webkit-linear-gradient(#eee, #c1c1c1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(2px 2px #333);
        }

        .ti2{
          font-size: 22px;
          background: -webkit-linear-gradient(#333, #eee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(2px 2px #333);
        }
        

      `}</style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A blog for hunting coders by a hunting coder" />
        <meta name="keyword" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className=' flex justify-center items-center flex-col'>
        <h1 className={`ti font-bold text-white text-6xl `}>
          Hunting Coder
        </h1>
        


        <p className='ti2 text-white'>
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
