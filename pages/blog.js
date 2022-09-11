import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "flowbite-react";
// import InfiniteScroll from "react-infinite-scroll-component";


const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allBlogs);
  const   [count, setcount] = useState(2)

  // const fetchData = async() => {
  //   // a fake async api call like which sends
  //   // 20 more records in 1.5 secs
  //   // let d = await fetch(`http://localhost:3000/api/blogs?count=${count+2}`)
  //   // let data = await d.json();
  //   // setblogs(data)
  // };


  return (
    <div>
      <main className="text-center ">
        {/* 
      {blogs.map((blogItem)=>{
        return <div key={blogItem.slug}>
        <h3 className="text-xl font-bold">
        <Link href={`/blogpost/${blogItem.slug}`}>{blogItem.title}</Link>
            </h3>
            <p>{blogItem.content.substr(0,400)}</p>
        </div>
      })} */}

        {/* <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          
        >{blogs.map((blogItem) => {
          return (
            <div className="flex m-8 flex-wrap" key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <a>
                  <Card
                    style={{
                      background: "-webkit-linear-gradient(#eee, #c1c1c1);",
                    }}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {blogItem.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                      {blogItem.content.substr(0, 400)}
                    </p>
                  </Card>
                </a>
              </Link>
            </div>
          );
        })}
        </InfiniteScroll> */}

        {blogs.map((blogItem) => {
          return (
            <div className="flex m-8 flex-wrap" key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <a>
                  <Card
                    style={{
                      background: "-webkit-linear-gradient(#eee, #c1c1c1);",
                    }}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {blogItem.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                      {blogItem.content.substr(0, 400)}
                    </p>
                  </Card>
                </a>
              </Link>
            </div>
          );
        })}

        {/* <div className="blogs">
          <div className="blogItem ">
            <h3 className="text-xl font-bold">
              <Link href={"/blogpost/learn-javascript"}>How to learn JavaScript in 2022</Link>
            </h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <h3 className="text-xl font-bold">
              How to learn JavaScript in 2022
            </h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <h3 className="text-xl font-bold">
              How to learn JavaScript in 2022
            </h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
